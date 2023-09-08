import styled from "styled-components";
import BackButton from "../components/common/BackButton";
import FavouritesList from "../components/pageSections/FavouritesList";

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2vh;
`;

const StyledTitle = styled.h1`
	height: 15vh;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Favourites() {
	return (
		<StyledWrapper>
			<BackButton />
			<StyledTitle>Lista de Favoritos❤️</StyledTitle>
			<FavouritesList />
		</StyledWrapper>
	);
}
