export type Partner = {
	name: string;
	kind: string;
	/* only set when we've actually been given the URL to link to */
	href?: string;
	/* real logo file in /static/img/partners - omitted where we don't have one yet */
	logo?: string;
};

/* Real partners, confirmed. Order roughly follows how long we've worked together. */
export const partners: Partner[] = [
	{
		name: 'PorterShed',
		kind: 'Hosts our meets & hackathons',
		href: 'https://portershed.com/',
		logo: '/img/partners/portershed.webp'
	},
	{
		name: 'Moyne Villa F.C.',
		kind: 'Our first supporter',
		href: 'https://moynevilla.ie/',
		logo: '/img/partners/moyne-villa.jpg'
	},
	{
		name: 'Hack Club',
		kind: 'Fiscal partner',
		href: 'https://hackclub.com',
		logo: '/img/partners/hackclub.png'
	},
	{
		name: 'Patch',
		kind: 'Sponsor & partner',
		href: 'https://www.joinpatch.org/patch',
		logo: '/img/partners/patch.png'
	},
	{
		name: 'IdeasLab @ University of Galway',
		kind: 'Hackathon supporter',
		href: 'https://www.universityofgalway.ie/ideaslab/',
		logo: '/img/partners/ideaslab.jpg'
	},
	{
		name: 'ISE @ UL',
		kind: 'Sponsor & partner',
		href: 'https://software-engineering.ie/',
		logo: '/img/partners/ise.jpg'
	},
	{
		name: 'Siren',
		kind: 'Hackathon supporter',
		href: 'https://siren.io/',
		logo: '/img/partners/siren.png'
	}
];

export const partnerAsks = [
	'A room we can use',
	'Hardware and tools',
	'Engineers who’ll talk to teenagers like adults',
	'Covering the cost of a hackathon weekend'
];
