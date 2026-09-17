export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
	{ label: 'Communities', href: '/communities' },
	{ label: 'Events', href: '/events' },
	{ label: 'Projects', href: '/projects' },
	{ label: 'Partners', href: '/partners' },
	{ label: 'About', href: '/about' }
];

/* TODO: replace with the real join form / Discord invite when it's ready. */
export const links = {
	/* TODO: point join/startCommunity at the real form or Discord invite. */
	join: '/communities',
	startCommunity: '/communities#start-one',
	partner: '/partners',
	sponsorship: '/partners', // TODO: link the sponsorship deck (PDF) here
	contact: '/about' // TODO: real contact email
};

export const proof = [
	{ figure: '100+', label: 'Young builders' },
	{ figure: '4 counties', label: 'Communities across Ireland' },
	{ figure: 'Hackathons', label: 'National, and growing' },
	{ figure: '100%', label: 'Nonprofit' }
];

export const timeline = [
	{ step: 'Robotics team shut down', note: 'that was meant to be the end of it' },
	{ step: 'Crossed the road', note: null },
	{ step: 'Moyne Villa clubhouse', note: 'one room, one plug socket' },
	{ step: 'Started building', note: 'every single week' },
	{ step: '100+ young people', note: 'and counting' }
];
