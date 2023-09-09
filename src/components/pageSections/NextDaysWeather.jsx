import styled from "styled-components";
import { useGetCityDetailWeatherByIdQuery } from "../../services/weatherApi";
import { StatusManager, WeatherCardList } from "../common";

const StyledSection = styled.section`
	height: auto;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2vh;
`;

export default function NextDaysWeather({ id }) {
	const { data, isLoading, error } = useGetCityDetailWeatherByIdQuery(id);

	if (!data) return StatusManager({ error });

	const { nextDays } = data;

	return (
		<StyledSection>
			<h3>Próximos días</h3>
			<StatusManager isLoading={isLoading} noResults={!nextDays?.length} error={error}>
				<WeatherCardList cards={nextDays} />
			</StatusManager>
		</StyledSection>
	);
}
