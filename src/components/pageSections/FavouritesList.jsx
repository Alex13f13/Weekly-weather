import styled from "styled-components";
import { useEffect, useState } from "react";
import StatusManager from "../common/StatusManager";
import WeatherCardList from "../common/WeatherCardList";
import useFavourites from "../../utils/hooks/useFavourites";

const StyledWrapper = styled.section`
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
		<StyledWrapper>
			<StatusManager isLoading={!cities?.length}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledWrapper>
	);
}
