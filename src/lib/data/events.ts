import { photos } from './photos';

export type FeaturedEvent = {
	name: string;
	city: string;
	venue: string;
	size: string;
	when: string;
	dateNote: string;
	description: string;
	cta: string;
};

export const featuredEvent: FeaturedEvent = {
	name: 'Innovation Ireland Hackathon',
	city: 'Dublin',
	venue: 'Dogpatch Labs',
	size: '150–200 young builders',
	when: 'Late November / early December',
	dateNote: 'Date TBD',
	description:
		'One room. Everyone who builds something in Ireland, in the same place, for a weekend. Bring an idea or find one when you get there.',
	cta: 'I want to be there'
};

export type PastEvent = {
	title: string;
	place: string;
	photo: keyof typeof photos;
	tilt: number;
};

/* Real photographs from events we've actually run.
   TODO: add dates and venues for each of these. */
export const pastEvents: PastEvent[] = [
	{ title: 'FutureHack', place: 'Hackathon', photo: 'futurehackGroup', tilt: -1.5 },
	{ title: 'FutureHack', place: 'Judging', photo: 'futurehackJudges', tilt: 1.2 },
	{ title: 'Opening day', place: 'Talk', photo: 'openingDayTalk', tilt: -0.8 },
	{ title: 'Headford', place: 'Day one', photo: 'dayOne', tilt: 2 }
];
