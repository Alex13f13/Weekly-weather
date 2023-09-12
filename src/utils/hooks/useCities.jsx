import { useState, useEffect } from "react";
import useFavourites from "./useFavourites";

export default function useCities() {
	const { getAllCitiesData, favourites } = useFavourites();
	const [cities, setCities] = useState([]);
	const [error, setError] = useState(false);
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		getAllCitiesData(favourites)
			.then((cities) => {
				setCities(cities);
				setIsloading(false);
			})
			.catch(() => setError(true));
	}, [favourites]);

	return { cities, error, isLoading };
}
