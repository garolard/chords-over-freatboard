import { Chord } from "../types";
import * as ChordHelper from '../helpers/ChordsHelper';

type Props = {
	selectedChord: Chord;
};
export default function ChordSummary({ selectedChord }: Props) {
	const { name, notes } = {...selectedChord};

	const chordParts = [
		<p key='root' className="text-lg">Root: {notes[0]}</p>,
	];

	const rootIndex = ChordHelper.getAvailableNotes().indexOf(notes[0]);
	for (let i = 1; i < notes.length; i++) {
		const note = ChordHelper.getAvailableNotes().indexOf(notes[i]);
		const interval = rootIndex < note 
			? note - rootIndex
			: ChordHelper.getAvailableNotes().length - rootIndex + note;

		const intervalName = ChordHelper.getIntervalName(interval);
		chordParts.push(<p key={intervalName} className="text-lg">{intervalName}: {notes[i]}</p>);
	}

	return <div className="flex flex-col">
		<p className="mt-4 text-xl">Name: {name}</p>
		{chordParts}
	</div>;
}