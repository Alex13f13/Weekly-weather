import { useParams } from "react-router-dom";
import { StyledHeader, StyledWrapper } from "../styles";
import { BackButton, FavButton } from "../components/common";
import { CityDayDetails, NextDaysWeather } from "../components/pageSections";
import useFavourites from "../utils/hooks/useFavourites";

export default function Detail() {
	const { id } = useParams();
	const { isFavourite, toggleFavourite } = useFavourites();

	return (
		<StyledWrapper>
			<StyledHeader>
				<BackButton />
				<FavButton isFavorite={isFavourite(id)} onClick={() => toggleFavourite(id)} />
			</StyledHeader>
			<CityDayDetails id={id} />
			<NextDaysWeather id={id} />
		</StyledWrapper>
	);
}
