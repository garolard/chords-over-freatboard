import { ValidQueryParams } from "../types";

const availableKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

type Props = {
	selectedKey: string;
	setQueryParams: (params: Partial<ValidQueryParams>) => void;
}
export default function KeySelector({ selectedKey, setQueryParams }: Props) {
	return <div className="flex flex-col">
		<p className="mt-4 text-xl">Select a key:</p>
		<div className='flex flex-row'>
		{availableKeys.map((key) => (
			<button
				key={key}
				className={`p-2 px-4 m-1 border-2 rounded-xl ${selectedKey === key ? 'border-blue-500' : 'border-gray-medium'}`}
				onClick={() => setQueryParams({ 'key': key })}
			>
				{key}
			</button>
		))}
		</div>
	</div>;
}