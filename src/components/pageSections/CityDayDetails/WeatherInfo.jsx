import styled from "styled-components";
import { getWeatherIcon } from "../../../utils/getWeatherIcon";
import { SIZE } from "../../../utils/constants";

const StyledWeather = styled.div`
	margin: auto;
	text-align: center;
	gap: 2vh;
`;

function WeatherInfo({ weather }) {
	return (
		<StyledWeather>
			{getWeatherIcon(weather, SIZE.large)}
			<h5>{weather}</h5>
		</StyledWeather>
	);
}

export default WeatherInfo;
