import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";
import { StyledGrid } from "../../styles";
import { WeatherCard } from "../common";
import { getWeatherIcon } from "../../utils/getWeatherIcon";
import { SIZE } from "../../utils/constants";

export default function WeatherCardList({ cards }) {
	const navigate = useNavigate();

	return (
		<StyledGrid>
			{cards?.map((card, index) => (
				<WeatherCard
					key={index}
					name={card?.name}
					weather={card?.description}
					icon={getWeatherIcon(card?.icon, SIZE.large)}
					max={card?.temperatures?.max}
					min={card?.temperatures?.min}
					onClick={() => {
						card?.id && navigate(`${paths?.detailBase}${card?.id}`);
					}}
				/>
			))}
		</StyledGrid>
	);
}
