import { Chord } from "../types";

export function getChordsFor(selectedKey: string, selectedScale: string): Chord[] {
	const scale = getScaleFromRoot(selectedKey, availableScalesIntervals[selectedScale]);
	const chordSignatures = gradesForScales[selectedScale].split(', ');
	
	const chords = scale.map((note, idx) => {
		const chordSignature = chordSignatures[idx % chordSignatures.length];
		
		let intervals: number[] = [];
		switch (chordSignature) {
			case 'maj':
				intervals = majorChordIntervals;
				break;
			case 'min':
				intervals = minorChordIntervals;
				break;
			case 'dim':
				intervals = diminishedChordIntervals;
				break;
		}

		const indexOfRoot = availableNotes.indexOf(note);
		const chord = [note, availableNotes[(indexOfRoot + intervals[1]) % availableNotes.length], availableNotes[(indexOfRoot + intervals[2]) % availableNotes.length]];
		return {
			'name': `${note}${chordSignature}`,
			'notes': chord,
		}
	});
	return chords;
}

export function getScaleFromRoot(root: string, intervals: number[]): string[] {
	const scale = [root];
	let currentNoteIdx = availableNotes.indexOf(root);
	for (let i = 0; i < intervals.length; i++) {
		currentNoteIdx = currentNoteIdx + intervals[i];
		scale.push(availableNotes[currentNoteIdx % availableNotes.length]);
	}
	return scale;
}

const availableNotes = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B'];

const majorScaleIntervals = [2, 2, 1, 2, 2, 2];
const minorScaleIntervals = [2, 1, 2, 2, 1, 2];

const availableScalesIntervals: { [scale: string]: number[] } = {
	'major': majorScaleIntervals,
	'minor': minorScaleIntervals
};

const gradesForScales: { [grade: string]: string } = {
	'major': 'maj, min, min, maj, maj, min, dim',
	'minor': 'min, dim, maj, min, min, maj, maj'
};

const majorChordIntervals = [0, 4, 7];
const minorChordIntervals = [0, 3, 7];
const diminishedChordIntervals = [0, 3, 6];
