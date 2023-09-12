import styled from "styled-components";
import { useSelector } from "react-redux";
import { StatusManager, WeatherCardList } from "../common";
import { useGetCitiesByProvinceIdQuery } from "../../services/weatherApi";

const StyledSection = styled.section`
	height: auto;
	width: 100%;
`;

export default function CityWeatherList() {
	const { selectedProvince } = useSelector((state) => state.weather);
	console.log("selectedProvince", selectedProvince);
	const { data: cities, isLoading, error } = useGetCitiesByProvinceIdQuery(selectedProvince);

	return (
		<StyledSection data-testid="city-weather-list">
			<StatusManager isLoading={isLoading} noResults={!cities?.length} error={error}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledSection>
	);
}
