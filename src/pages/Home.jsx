import { StyledTitle, StyledWrapper } from "../styles";
import { CityWeatherList, ProvinceSelector, FavoriteListButton } from "../components/pageSections";

export default function Home() {
	return (
		<StyledWrapper>
			<StyledTitle>El tiempo en España</StyledTitle>
			<ProvinceSelector />
			<FavoriteListButton />
			<CityWeatherList />
		</StyledWrapper>
	);
}
