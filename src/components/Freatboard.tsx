import { getScaleFromRoot } from '../helpers/ChordsHelper';
import { Chord } from '../types';

const naturalIntervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

type FretboardProps = {
	selectedChord: Chord;
};
export default function Fretboard({ selectedChord }: FretboardProps) {
	return <div className="w-full grid grid-cols-12 grid-rows-6 gap-2 my-32">
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<FretboardNote key={`E${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('B', naturalIntervals).map((note, i) => (
			<FretboardNote key={`B${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}	
		{getScaleFromRoot('G', naturalIntervals).map((note, i) => (
			<FretboardNote key={`G${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('D', naturalIntervals).map((note, i) => (
			<FretboardNote key={`D${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('A', naturalIntervals).map((note, i) => (
			<FretboardNote key={`A${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<FretboardNote key={`E2${note}${i}`} note={note} chordNotes={selectedChord.notes} />
		))}
		{[...Array(12)].map((_, i) => {
			if (i === 0) {
				return <p key={`fret-${i}`} className='flex justify-center mt-3'>Open</p>;
			} else if (i === 3 || i === 5 || i === 7 || i === 9) {
				return <p key={`fret-${i}`} className='flex justify-center mt-3'>{i}</p>;
			} else {
				return <div></div>;
			}
		})}
	</div>;
}

type FretboardNoteProps = {
	note: string;
	chordNotes: string[];
};
function FretboardNote({ note, chordNotes }: FretboardNoteProps) {
	const noteGradeOnChord = chordNotes.indexOf(note);
	let bgColor = '';
	if (noteGradeOnChord === 0) {
		bgColor = 'bg-green-400';
	} else if (noteGradeOnChord === 1 || noteGradeOnChord === 2) {
		bgColor = 'bg-yellow-400';
	}

	const textClass = note.includes('/') ? 'text-xs' : 'text-sm';

	return <div className="flex justify-center">
		<div className={`w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full ${textClass} ${bgColor}`}>
			<p>{note.includes('/') ? note.split('/')[0] : note}</p>
		</div>
	</div>;
}