import type { Action } from 'svelte/action';

type InViewOptions = { threshold?: number; once?: boolean; margin?: string };

/**
 * Adds `data-inview` once the element scrolls into view.
 * Used to trigger the rough drawings drawing themselves on.
 */
export const inView: Action<HTMLElement | SVGElement, InViewOptions | undefined> = (
	node,
	options
) => {
	const reduce =
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduce || typeof IntersectionObserver === 'undefined') {
		node.setAttribute('data-inview', '');
		return {};
	}

	let opts = options ?? {};

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-inview', '');
					if (opts.once !== false) observer.unobserve(node);
				} else if (opts.once === false) {
					node.removeAttribute('data-inview');
				}
			}
		},
		{ threshold: opts.threshold ?? 0.25, rootMargin: opts.margin ?? '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		update(next) {
			opts = next ?? {};
		},
		destroy() {
			observer.disconnect();
		}
	};
};
