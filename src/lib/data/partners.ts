export type Partner = {
	/* TODO: real partner names + logo files once agreements are signed.
	   We do not list a company here until they've actually said yes. */
	name: string;
	kind: string;
};

export const partners: Partner[] = [
	{ name: 'Partner slot', kind: 'Venue' },
	{ name: 'Partner slot', kind: 'Hardware' },
	{ name: 'Partner slot', kind: 'Food' },
	{ name: 'Partner slot', kind: 'Mentors' },
	{ name: 'Partner slot', kind: 'Travel' },
	{ name: 'Partner slot', kind: 'Prizes' }
];

export const partnerAsks = [
	'A room we can use',
	'Hardware and tools',
	'Engineers who’ll talk to teenagers like adults',
	'Covering the cost of a hackathon weekend'
];
