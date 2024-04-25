import { ValidQueryParams } from "../types";

const availableScales = ['Major', 'Minor'];

type Props = {
	selectedScale: string;
	setQueryParams: (params: Partial<ValidQueryParams>) => void;
}
export default function KeySelector({ selectedScale, setQueryParams }: Props) {
	return <div className="flex flex-col">
		<p className="mt-4 text-xl">Select a scale:</p>
		<div className='flex flex-row flex-wrap'>
		{availableScales.map((scale) => (
			<button
				key={scale}
				className={`p-2 px-4 m-1 border-2 rounded-xl ${selectedScale === scale.toLocaleLowerCase() ? 'border-blue-500' : 'border-gray-medium'}`}
				onClick={() => setQueryParams({ 'scale': scale.toLocaleLowerCase() })}
			>
				{scale}
			</button>
		))}
		</div>
	</div>;
}