import styled from "styled-components";
import StatusManager from "../common/StatusManager";
import { useSelector } from "react-redux";
import { useGetCitiesByProvinceIdQuery } from "../../services/weatherApi";
import WeatherCardList from "../common/WeatherCardList";

const StyledWrapper = styled.section`
	height: auto;
	width: 100%;
`;

export default function CityWeatherList() {
	const { selectedProvince } = useSelector((state) => state.weather);
	const { data: cities, isLoading, error } = useGetCitiesByProvinceIdQuery(selectedProvince);

	return (
		<StyledWrapper>
			<StatusManager isLoading={isLoading} noResults={!cities?.length} error={error}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledWrapper>
	);
}
