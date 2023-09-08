import styled from "styled-components";
import WeatherCard from "../common/WeatherCard";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";

const StyledWrapper = styled.section`
	height: auto;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 2vh;
`;

export default function WeatherCardList({ cards }) {
	const navigate = useNavigate();

	return (
		<StyledWrapper>
			{cards?.map((card) => (
				<WeatherCard
					key={card?.id}
					name={card?.name}
					weather={card?.description}
					icon={getWeatherIcon(card?.icon, "large")}
					max={`${card?.temperatures?.max}°C`}
					min={`${card?.temperatures?.min}°C`}
					onClick={() => {
						navigate(`${paths?.detailBase}${card?.id}`);
					}}
				/>
			))}
		</StyledWrapper>
	);
}
