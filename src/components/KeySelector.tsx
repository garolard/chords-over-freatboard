import { useState } from "react";

const availableKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

function buildQueryParamsFromObject(queryParams: object): URLSearchParams {
	const params = new URLSearchParams();
	for (let pair of Object.entries(queryParams)) {
		params.set(pair[0], pair[1]);
	
	}
	return params;
}

function useQueryParams(initialValue: object): [URLSearchParams, (newQueryParams: object) => void] {
	const actualQuery = window.location.search === '' 
		? buildQueryParamsFromObject(initialValue)
		: new URLSearchParams(window.location.search);

	const [queryParams, setQueryParams] = useState(actualQuery);

	return [queryParams, (newQueryParams) => { 
		for (let pair of Object.entries(newQueryParams)) {
			queryParams.set(pair[0], pair[1]);
			const newSearchParams = new URLSearchParams(queryParams);
			window.history.pushState({}, '', `${window.location.pathname}?${newSearchParams}`);
			setQueryParams(newSearchParams);
		}
	}];	
}

export default function KeySelector() {
	const [queryParams, setQueryParams] = useQueryParams({ 'key': 'F', 'scale': 'major' });

	return <div className="flex flex-row">
		{availableKeys.map((key) => (
			<button
				key={key}
				className={`p-2 px-4 m-1 text-white rounded-xl ${queryParams.get('key') === key ? 'bg-blue-500' : 'bg-gray-500'}`}
				onClick={() => setQueryParams({ 'key': key })}
			>
				{key}
			</button>
		))}
	</div>;
}