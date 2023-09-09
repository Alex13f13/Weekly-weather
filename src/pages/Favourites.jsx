import { StyledTitle, StyledHeader, StyledWrapper } from "../styles";
import { BackButton } from "../components/common";
import { FavouritesList } from "../components/pageSections";

export default function Favourites() {
	return (
		<StyledWrapper>
			<StyledHeader>
				<BackButton />
			</StyledHeader>
			<StyledTitle>Lista de Favoritos❤️</StyledTitle>
			<FavouritesList />
		</StyledWrapper>
	);
}
