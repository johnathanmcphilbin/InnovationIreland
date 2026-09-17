export type Community = {
	id: string;
	name: string;
	county: string;
	frequency: string;
	blurb: string;
	/* position on the IrelandSketch viewBox, as a percentage.
	   Derived from real coordinates, then left alone — the map is a drawing,
	   not a geographic UI, so don't "correct" these by eye. */
	x: number;
	y: number;
	/* which side of the marker its handwritten label sits on */
	label: 'left' | 'right' | 'above' | 'below';
	status: 'live' | 'soon';
};

export const communities: Community[] = [
	{
		id: 'galway-city',
		name: 'Galway City',
		county: 'Co. Galway',
		frequency: 'Weekly',
		/* TODO: replace with a description written by the people who run this group. */
		blurb: 'A weekly group in the city. Bring a project, or come and find one.',
		x: 30.8,
		y: 52.9,
		label: 'left',
		status: 'live'
	},
	{
		id: 'ballina',
		name: 'Ballina',
		county: 'Co. Mayo',
		frequency: 'Weekly',
		/* TODO: replace with a description written by the people who run this group. */
		blurb: 'Student-run build nights in north Mayo.',
		x: 29,
		y: 34.4,
		label: 'above',
		status: 'live'
	},
	{
		id: 'laois',
		name: 'Laois',
		county: 'Co. Laois',
		frequency: 'Weekly',
		/* TODO: replace with a description written by the people who run this group. */
		blurb: 'A weekly group in the midlands.',
		x: 60,
		y: 58.1,
		label: 'right',
		status: 'live'
	},
	{
		id: 'ennis',
		name: 'Ennis',
		county: 'Co. Clare',
		frequency: 'Weekly',
		/* TODO: replace with a description written by the people who run this group. */
		blurb: 'A weekly group in Ennis, building whatever people turn up with.',
		x: 31.8,
		y: 62.1,
		label: 'below',
		status: 'live'
	}
];

/* Communities that exist as conversations, not yet as rooms.
   TODO: confirm which of these we can name publicly. */
export const comingSoon = 'More on the way';
