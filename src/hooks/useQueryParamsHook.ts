import { useEffect, useState } from "react";

export default function useQueryParams<PType>(defaultValue: PType): [URLSearchParams, (newQueryParams: Partial<PType>) => void] {
	const actualQuery = window.location.search === ''
		? buildQueryParamsFromObject<PType>(defaultValue)
		: new URLSearchParams(window.location.search);

	const [queryParams, setQueryParams] = useState(actualQuery);
	
	if (window.location.search === '') {
		window.history.pushState({}, '', `${window.location.pathname}?${queryParams}`);
	
	}

	useEffect(() => {
		window.addEventListener('popstate', () => onPopState(setQueryParams));
		return () => window.removeEventListener('popstate', () => onPopState(setQueryParams));
	}, []);

	return [queryParams, updateQueryParams(queryParams, setQueryParams)];	
}

function updateQueryParams<PType>(queryParams: URLSearchParams, setQueryParams: (newParams: URLSearchParams) => void): (newQueryParams: Partial<PType>) => void {
	return (newQueryParams: Partial<PType>) => {
		for (let pair of Object.entries(newQueryParams)) {
			queryParams.set(pair[0], pair[1] as any);
			const newSearchParams = new URLSearchParams(queryParams);
			window.history.pushState({}, '', `${window.location.pathname}?${newSearchParams}`);
			setQueryParams(newSearchParams);
		}
	};
}

function onPopState(setQueryParams: (newParams: URLSearchParams) => void): void {
	setQueryParams(new URLSearchParams(window.location.search));
}

function buildQueryParamsFromObject<PType>(queryParams: Partial<PType>): URLSearchParams {
	const params = new URLSearchParams();
	for (let pair of Object.entries(queryParams)) {
		params.set(pair[0], pair[1] as any);
	
	}
	return params;
}