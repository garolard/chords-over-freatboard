import { ValidQueryParams } from "../types";

type Props = {
	selectedKey: string;
	selectedScale: string;
	selectedChord?: string | null;
	setQueryParams: (params: Partial<ValidQueryParams>) => void;
}
export default function ChordSelector({ selectedKey, selectedScale, selectedChord, setQueryParams }: Props) {
	getChordsFor(selectedKey, selectedScale);

	return <div className="flex flex-col">
	<p className="mt-4 text-xl">Select a chord:</p>
	<div className='flex flex-row'>
	{/* {availableChords.map((chord) => (
		<button
			key={chord}
			className={`p-2 px-4 m-1 text-white rounded-xl ${selectedKey === key ? 'bg-blue-500' : 'bg-gray-500'}`}
			onClick={() => setQueryParams({ 'chord': chord })}
		>
			{chord}
		</button>
	))} */}
	</div>
</div>;
}

function getChordsFor(selectedKey: string, selectedScale: string): void {
	const scale = getScaleFromRoot(selectedKey, availableScalesIntervals[selectedScale]);
	const chords = getChordsForScale(scale);
	console.log(scale);
	console.log(chords);
}

const availableNotes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

const majorScaleIntervals = [2, 2, 1, 2, 2, 2];
const minorScaleIntervals = [2, 1, 2, 2, 1, 2];

const majChordIntervals = [0, 4, 7];
const minChordIntervals = [0, 3, 7];

const availableScalesIntervals: { [scale: string]: number[] } = {
	'major': majorScaleIntervals,
	'minor': minorScaleIntervals
};

const availableChordsIntervals: { [chord: string]: number[] } = {
	'maj': majChordIntervals,
	'min': minChordIntervals
};

function getScaleFromRoot(root: string, intervals: number[]): string[] {
	const scale = [root];
	let currentNoteIdx = availableNotes.indexOf(root);
	for (let i = 0; i < intervals.length; i++) {
		currentNoteIdx = currentNoteIdx + intervals[i];
		scale.push(availableNotes[currentNoteIdx % availableNotes.length]);
	}
	return scale;
}

function getChordsForScale(scale: string[]) {
	const chords = [];
	for (let chordDef of Object.entries(availableChordsIntervals)) {
		const notes = chordDef[1].map((interval) => availableNotes[interval]);

		if (notes.some((note) => !scale.includes(note))) {
			continue;
		}
		
		chords.push({ name: `${notes[0]}${chordDef[0]}`, notes: notes });
	}	
	return chords;
}