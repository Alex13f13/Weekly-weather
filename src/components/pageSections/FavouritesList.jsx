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

	useEffect(() => {
		getAllCitiesData(favourites).then((cities) => setCities(cities));
	}, [favourites]);

	return (
		<StyledSection>
			<StatusManager isLoading={!cities?.length}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledSection>
	);
}