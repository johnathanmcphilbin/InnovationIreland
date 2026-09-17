export type Partner = {
	name: string;
	kind: string;
	/* only set when we've actually been given the URL to link to */
	href?: string;
};

/* Real partners, confirmed. Order roughly follows how long we've worked together. */
export const partners: Partner[] = [
	{ name: 'Moyne Villa F.C.', kind: 'Our first supporter' },
	{ name: 'Presentation College Headford', kind: 'Supporting Innovation' },
	{ name: 'Hack Club', kind: 'Fiscal partner' },
	{ name: 'Patch', kind: 'Sponsor & partner' },
	{
		name: 'IdeasLab @ University of Galway',
		kind: 'Hackathon supporter',
		href: 'https://www.universityofgalway.ie/Ideaslab'
	},
	{ name: 'ISE @ UL', kind: 'Sponsor & partner' },
	{ name: 'Siren', kind: 'Powering investigations' }
];

export const partnerAsks = [
	'A room we can use',
	'Hardware and tools',
	'Engineers who’ll talk to teenagers like adults',
	'Covering the cost of a hackathon weekend'
];
