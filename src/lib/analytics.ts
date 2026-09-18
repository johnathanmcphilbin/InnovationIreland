import posthog from 'posthog-js';
import { browser } from '$app/environment';

/* PostHog web analytics.
   This is the PUBLIC project API key ("phc_..."), not a secret - it's
   designed to ship in client-side code, the same way a Google Analytics
   tracking ID is. It only lets events be sent in, not read back out.
   Project: Innovation Ireland, EU region. */
const POSTHOG_KEY = 'phc_mTyUvYSBKQYqXAzUX7FRGGWTMSDSntpWTqi8V4g2mYBA';
const POSTHOG_HOST = 'https://eu.i.posthog.com';

const CONSENT_KEY = 'ii_cookie_consent';
export type Consent = 'accepted' | 'declined';

let initialised = false;

/** What the visitor has previously chosen, if anything. */
export function getConsent(): Consent | null {
	if (!browser) return null;
	try {
		const value = localStorage.getItem(CONSENT_KEY);
		return value === 'accepted' || value === 'declined' ? value : null;
	} catch {
		return null;
	}
}

/** Record the choice, and start (or never start) analytics accordingly.
 *  Nothing is sent to PostHog before this is called with "accepted". */
export function setConsent(choice: Consent) {
	if (!browser) return;
	try {
		localStorage.setItem(CONSENT_KEY, choice);
	} catch {
		/* private browsing etc - the choice just won't be remembered */
	}
	if (choice === 'accepted') initAnalytics();
}

function initAnalytics() {
	if (!browser || initialised) return;
	initialised = true;

	posthog.init(POSTHOG_KEY, {
		api_host: POSTHOG_HOST,
		person_profiles: 'identified_only',
		/* SvelteKit does its own client-side routing, so autocapture's
		   history-based pageview tracking misses in-app navigation -
		   pageviews are sent manually from the root layout instead. */
		capture_pageview: false,
		capture_pageleave: true
	});
}

/** Called on every load/navigation. Only actually starts PostHog, and only
 *  sends a pageview, if the visitor has already said yes. */
export function trackPageviewIfConsented(url: string) {
	if (!browser) return;
	if (getConsent() !== 'accepted') return;
	initAnalytics();
	posthog.capture('$pageview', { $current_url: url });
}
