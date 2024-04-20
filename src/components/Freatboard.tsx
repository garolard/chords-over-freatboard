import { getScaleFromRoot } from '../helpers/ChordsHelper';

const naturalIntervals = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Freatboard() {
	return <div className="w-full grid grid-cols-12 grid-rows-6 mt-40">
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}
	{getScaleFromRoot('B', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}	
		{getScaleFromRoot('G', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}
		{getScaleFromRoot('D', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}
		{getScaleFromRoot('A', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}
		{getScaleFromRoot('E', naturalIntervals).map((note, i) => (
			<div key={i} className="border border-gray-medium">{note}</div>
		))}
	</div>;
}