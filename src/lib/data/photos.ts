/* Real photography. One entry per file in /static/img - every one of these is
   an actual Innovation Ireland photo, so captions stick to what's in the frame. */

export type Photo = {
	src: string;
	alt: string;
	caption?: string;
};

export const photos = {
	dayOneHeadford: {
		src: '/img/day-one-headford.jpg',
		alt: 'A small humanoid robot on a table at the first Headford meeting, with members working behind it',
		caption: 'day one, Headford'
	},
	dayOneBuilding: {
		src: '/img/day-one-building.jpg',
		alt: 'Members building at one of the first Headford sessions',
		caption: 'the first few weeks'
	},
	dayOne: {
		src: '/img/day-one.jpg',
		alt: 'The first Innovation Ireland meeting',
		caption: 'the very first night'
	},
	moyneVilla: {
		src: '/img/moyne-villa-day-one.jpg',
		alt: 'Sunset over the floodlights and pitch at Moyne Villa, the football club whose clubhouse we started in',
		caption: 'Moyne Villa, the club that gave us a room'
	},
	futurehackRoom: {
		src: '/img/futurehack-room.jpg',
		alt: 'Young people working around tables covered in sticky notes at FutureHack',
		caption: 'yeah, this actually happened.'
	},
	futurehackGroup: {
		src: '/img/futurehack-group.jpg',
		alt: 'A large group of young builders with their hands in the air under a FutureHack by Innovation Ireland screen',
		caption: 'everyone, at once'
	},
	futurehackJudges: {
		src: '/img/futurehack-judges.jpg',
		alt: 'Judges at FutureHack',
		caption: 'the judges deciding'
	},
	galwayOpeningDay: {
		src: '/img/galway-opening-day.jpg',
		alt: 'A room full of students at the Galway City opening day',
		caption: 'Galway City, opening day'
	},
	openingDayTalk: {
		src: '/img/opening-day-talk.jpg',
		alt: 'The founder of a game studio giving a talk at the opening day',
		caption: 'a game studio founder, talking to us'
	},
	iseSponsorship: {
		src: '/img/ise-sponsorship-galway.jpg',
		alt: 'ISE sponsorship at the Galway opening day',
		caption: 'ISE, backing the Galway opening day'
	},
	vexSecondPlace: {
		src: '/img/vex-second-place.jpg',
		alt: 'Our team at the VEX robotics competition, where we came second in our first year',
		caption: 'second, first time out'
	},
	vexCompetition: {
		src: '/img/vex-competition.jpg',
		alt: 'Members at the VEX robotics competition',
		caption: 'competition day'
	},
	scifestAwards: {
		src: '/img/scifest-awards.jpg',
		alt: 'Members with six awards won at SciFest, including first and second place',
		caption: 'six of them'
	},
	tecsAwards: {
		src: '/img/tecs-awards.jpg',
		alt: 'Award winners at TECS',
		caption: 'award winners'
	},
	stripeYoungScientist: {
		src: '/img/stripe-young-scientist.jpg',
		alt: 'Members at the Stripe Young Scientist exhibition',
		caption: 'off to the big one'
	}
} as const;
