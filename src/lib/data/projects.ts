import { photos } from './photos';

export type Project = {
	name: string;
	/* the context the work ended up in - TODO: swap for real builder credits
	   once we have permission to name people. */
	builder: string;
	line: string;
	photo: keyof typeof photos | 'empty';
	tilt: number;
	span?: 'wide' | 'tall';
};

export const projects: Project[] = [
	{
		name: 'VEX Robotics',
		builder: 'Competition team',
		line: 'Our first year competing, and we came second.',
		photo: 'vexSecondPlace',
		tilt: -1.2,
		span: 'wide'
	},
	{
		name: 'SciFest',
		builder: 'Awards',
		line: 'Six awards, including first and second.',
		photo: 'scifestAwards',
		tilt: 1
	},
	{
		name: 'Competition day',
		builder: 'VEX Robotics',
		line: 'Robots, pits, and a very long day.',
		photo: 'vexCompetition',
		tilt: -2,
		span: 'tall'
	},
	{
		name: 'TECS',
		builder: 'Awards',
		line: 'Award winners at TECS.',
		photo: 'tecsAwards',
		tilt: 1.6
	},
	{
		name: 'Stripe Young Scientist',
		builder: 'Exhibition',
		line: 'Our projects, out in front of judges.',
		photo: 'stripeYoungScientist',
		tilt: -0.6
	},
	{
		name: 'Your project',
		builder: 'You',
		line: 'This slot is genuinely empty. Come and fill it.',
		photo: 'empty',
		tilt: 0.8
	}
];
