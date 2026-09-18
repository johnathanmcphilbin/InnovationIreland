#!/usr/bin/env node
/**
 * Interactive event editor. No code editing required.
 *
 * Run it from the project folder:
 *
 *   npm run add-event
 *
 * It reads and writes src/lib/data/events.json directly — the same file
 * the site reads from — so changes show up next time the site is built
 * or deployed. Nothing here touches TypeScript, Svelte, or git.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const eventsPath = path.join(root, 'src/lib/data/events.json');
const photosPath = path.join(root, 'src/lib/data/photos.ts');

const rl = readline.createInterface({ input: stdin, output: stdout, terminal: false });
const lines = rl[Symbol.asyncIterator]();

/** Read one line of input, printing `prompt` first. */
async function nextLine(prompt) {
	stdout.write(prompt);
	const { value, done } = await lines.next();
	return done ? '' : value.trim();
}

/** Prompt with an optional default shown in brackets. */
async function ask(question, { default: def = '', required = false } = {}) {
	const suffix = def ? ` [${def}]` : '';
	while (true) {
		const answer = await nextLine(`${question}${suffix}: `);
		if (answer) return answer;
		if (def) return def;
		if (!required) return '';
		console.log("  That one's required, give it a go.");
	}
}

async function askYesNo(question, { default: def = false } = {}) {
	const hint = def ? 'Y/n' : 'y/N';
	const answer = (await nextLine(`${question} (${hint}): `)).toLowerCase();
	if (!answer) return def;
	return answer.startsWith('y');
}

function loadEvents() {
	return JSON.parse(readFileSync(eventsPath, 'utf-8'));
}

function saveEvents(data) {
	writeFileSync(eventsPath, JSON.stringify(data, null, '\t') + '\n');
}

/** Pull the real photo keys straight out of photos.ts, so this list can
 *  never drift out of sync with what actually exists. */
function loadPhotoKeys() {
	const src = readFileSync(photosPath, 'utf-8');
	const matches = [...src.matchAll(/^\t([a-zA-Z0-9]+): \{/gm)];
	return matches.map((m) => m[1]);
}

function printUpcoming(events) {
	if (events.upcomingEvents.length === 0) {
		console.log('  (nothing upcoming right now)');
		return;
	}
	events.upcomingEvents.forEach((e, i) => {
		const tag = i === 0 ? ' - currently the FEATURED event' : '';
		console.log(`  ${i + 1}. ${e.name} - ${e.city} - ${e.when}${tag}`);
	});
}

async function addUpcomingEvent(events) {
	console.log("\nNew upcoming event. Leave anything blank to skip it if it's not ready yet.\n");

	const name = await ask('Event name', { required: true });
	const city = await ask('City / town', { required: true });
	const venue = await ask('Venue', { required: true });
	const audience = await ask('Who\'s it for (e.g. "150-200 young builders")', { required: true });
	const when = await ask('When (e.g. "Friday 9 October, 3-6pm")', { required: true });
	const dateNote = await ask('Extra note next to the date (e.g. "Date TBD"), optional');
	const description = await ask('Short description (a sentence or two)', { required: true });
	const cta = await ask('Button text', { default: 'I want to be there' });
	const href = await ask(
		'Where the button should link (registration URL, or a page like /communities)',
		{ default: '/communities' }
	);

	const event = { name, city, venue, audience, when, dateNote, description, cta, href };

	const makeFeatured = await askYesNo('Make this the featured "next up" event?', {
		default: events.upcomingEvents.length === 0
	});

	if (makeFeatured) {
		events.upcomingEvents.unshift(event);
	} else {
		events.upcomingEvents.push(event);
	}

	console.log(`\nAdded "${name}".`);
}

async function addPastEvent(events) {
	console.log('\nNew past event photo.\n');

	const keys = loadPhotoKeys();
	console.log('Available photos (from src/lib/data/photos.ts):');
	keys.forEach((k, i) => console.log(`  ${i + 1}. ${k}`));

	let photo = '';
	while (!photo) {
		const answer = await ask('Pick a photo (number or name)', { required: true });
		const asIndex = Number(answer);
		if (Number.isInteger(asIndex) && keys[asIndex - 1]) {
			photo = keys[asIndex - 1];
		} else if (keys.includes(answer)) {
			photo = answer;
		} else {
			console.log('  Not a photo on that list, try again.');
		}
	}

	const title = await ask('Title (e.g. "FutureHack")', { required: true });
	const place = await ask('Sub-label (e.g. "Hackathon", "Judging")', { required: true });
	const tiltInput = await ask('Tilt in degrees, a small number like -1.5 or 2', {
		default: (Math.random() * 4 - 2).toFixed(1)
	});
	const tilt = Number(tiltInput) || 0;

	events.pastEvents.push({ title, place, photo, tilt });
	console.log(`\nAdded "${title} - ${place}".`);
}

async function removeUpcomingEvent(events) {
	console.log('\nCurrent upcoming events:');
	printUpcoming(events);
	if (events.upcomingEvents.length === 0) return;

	const answer = await ask('Number to remove, blank to cancel');
	const index = Number(answer) - 1;
	if (events.upcomingEvents[index]) {
		const [removed] = events.upcomingEvents.splice(index, 1);
		console.log(`Removed "${removed.name}".`);
	} else if (answer) {
		console.log('Not a valid number, nothing removed.');
	}
}

async function main() {
	console.log('Innovation Ireland - event editor\n');

	const events = loadEvents();

	console.log('Upcoming events right now:');
	printUpcoming(events);

	console.log(`\nPast event photos: ${events.pastEvents.length}\n`);

	console.log('What do you want to do?');
	console.log('  1. Add an upcoming event');
	console.log('  2. Add a past event photo');
	console.log('  3. Remove an upcoming event');
	console.log("  4. Just look, don't change anything");

	const choice = await ask('Choice', { default: '1' });

	if (choice === '1') {
		await addUpcomingEvent(events);
		saveEvents(events);
	} else if (choice === '2') {
		await addPastEvent(events);
		saveEvents(events);
	} else if (choice === '3') {
		await removeUpcomingEvent(events);
		saveEvents(events);
	} else {
		console.log('\nNo changes made.');
	}

	console.log('\nDone. Run `npm run dev` (or redeploy) to see it on the site.');
	rl.close();
}

main().catch((err) => {
	console.error('\nSomething went wrong:', err.message);
	rl.close();
	process.exit(1);
});
