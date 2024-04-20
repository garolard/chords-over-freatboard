import React from 'react';
import { getScaleFromRoot } from '../helpers/ChordsHelper';
import { Chord } from '../types';

const naturalIntervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

type FreatboardProps = {
	selectedChord: Chord;
};
export default function Freatboard({ selectedChord }: FreatboardProps) {
	return <div className="w-full grid grid-cols-12 grid-rows-6 gap-2 mt-40">
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('B', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}	
		{getScaleFromRoot('G', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('D', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('A', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<FreatboardNote key={i} note={note} chordNotes={selectedChord.notes} />
		))}
	</div>;
}

type FreatboardNoteProps = {
	note: string;
	chordNotes: string[];
};
function FreatboardNote({ note, chordNotes, ...props }: FreatboardNoteProps) {
	const noteGradeOnChord = chordNotes.indexOf(note);
	let bgColor = '';
	if (noteGradeOnChord === 0) {
		bgColor = 'bg-green-400';
	} else if (noteGradeOnChord === 1 || noteGradeOnChord === 2) {
		bgColor = 'bg-yellow-400';
	}

	return <div className="flex justify-center">
		<div className={`p-2 px-4 border border-gray-200 rounded-full ${bgColor}`}>
			{note}
		</div>
	</div>;
}