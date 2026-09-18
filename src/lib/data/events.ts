import { photos } from './photos';
import raw from './events.json';

/* The actual event content lives in events.json, not here, so it can be
   edited without touching TypeScript - by hand, or via `npm run add-event`.
   This file just adds the types on top. */

export type UpcomingEvent = {
	name: string;
	city: string;
	venue: string;
	audience: string;
	when: string;
	/** empty string means "no note" */
	dateNote: string;
	description: string;
	cta: string;
	href: string;
	/** optional downloadable extra, e.g. a sponsorship pack */
	pdf?: string;
	pdfLabel?: string;
};

export type PastEvent = {
	title: string;
	place: string;
	photo: keyof typeof photos;
	tilt: number;
};

/* Soonest first - this drives which one gets the big featured card. */
export const upcomingEvents: UpcomingEvent[] = raw.upcomingEvents;

/* Real photographs from events we've actually run. `photo` must match a key
   in src/lib/data/photos.ts. */
export const pastEvents: PastEvent[] = raw.pastEvents as PastEvent[];
