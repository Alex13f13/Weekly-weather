import styled from "styled-components";
import { StatusManager, WeatherCardList } from "../common";
import useCities from "../../utils/hooks/useCities";

const StyledSection = styled.section`
	height: auto;
	width: 100%;
`;

export default function FavouritesList() {
	const { cities, error, isLoading } = useCities();
	return (
		<StyledSection>
			<StatusManager isLoading={isLoading} error={error} noResults={!cities?.length}>
				<WeatherCardList cards={cities} />
			</StatusManager>
		</StyledSection>
	);
}
