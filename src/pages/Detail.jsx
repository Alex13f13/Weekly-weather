import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import CityDayDetails from "../components/pageSections/CityDayDetails";
import { useParams } from "react-router-dom";
import NextDaysWeather from "../components/pageSections/NextDaysWeather";
import FavButton from "../components/common/FavButton";
import useFavourites from "../utils/hooks/useFavourites";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2vh;
`;

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2vh;
`;

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
