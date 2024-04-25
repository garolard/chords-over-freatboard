import { Chord, ValidQueryParams } from "../types";

type Props = {
	availableChords: Chord[];
	selectedChord?: string | null;
	setQueryParams: (params: Partial<ValidQueryParams>) => void;
}
export default function ChordSelector({ availableChords, selectedChord, setQueryParams }: Props) {
	return <div className="flex flex-col">
		<p className="mt-4 text-xl">Select a chord:</p>
		<div className='flex flex-row flex-wrap'>
		{availableChords.map((chord) => (
			<button
				key={chord.name}
				className={`p-2 px-4 m-1 border-2 rounded-xl ${selectedChord === chord.name ? 'border-blue-500' : 'border-gray-medium'}`}
				onClick={() => setQueryParams({ 'chord': chord.name })}
			>
				{chord.name}
			</button>
		))}
		</div>
	</div>;
}