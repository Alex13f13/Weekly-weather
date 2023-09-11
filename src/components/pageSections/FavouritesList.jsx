import styled from "styled-components";
import { useEffect, useState } from "react";
import { StatusManager, WeatherCardList } from "../common";
import useFavourites from "../../utils/hooks/useFavourites";

const StyledSection = styled.section`
	height: auto;
	width: 100%;
`;

export default function FavouritesList() {
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

	return (
		<StyledSection>
			<StatusManager isLoading={isLoading} error={error} noResults={!cities?.length}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledSection>
	);
}
