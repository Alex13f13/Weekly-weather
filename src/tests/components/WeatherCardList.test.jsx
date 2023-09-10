import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { WeatherCardList } from "../../components/common";
import { paths } from "../../router/paths";
import { createMemoryHistory } from "history";

function renderWeatherCardList(cards = []) {
	const history = createMemoryHistory();
	history.push(`${paths.detailBase}1`);

	render(
		<MemoryRouter history={history} initialEntries={[paths.home]}>
			<Routes>
				<Route path={paths.home} element={<WeatherCardList cards={cards} />} />
				<Route path={paths.detail} element={<div>Detail</div>} />
			</Routes>
		</MemoryRouter>
	);

	return { history };
}

describe("WeatherCardList Component", () => {
	const cards = [
		{
			id: "1",
			name: "City1",
			description: "Despejado",
			icon: "Despejado",
			temperatures: { max: "30", min: "20" },
		},
		{
			id: "2",
			name: "City2",
			description: "Nuboso con lluvia débil",
			icon: "Nuboso con lluvia débil",
			temperatures: { max: "25", min: "18" },
		},
	];

	it("renders WeatherCardList component with correct number of cards", () => {
		renderWeatherCardList(cards);

		const weatherCards = screen.getAllByTestId("weather-card");
		expect(weatherCards.length).toBe(cards.length);
	});

	it("navigates to detail page when a card is clicked", () => {
		const { history } = renderWeatherCardList(cards);

		const cardToClick = screen.getByText("City1");
		fireEvent.click(cardToClick);

		expect(history.location.pathname).toBe(`${paths.detailBase}1`);
	});

	it("renders WeatherCardList component with no cards if cards prop is empty", () => {
		renderWeatherCardList([]);

		const weatherCards = screen.queryAllByTestId("weather-card");
		expect(weatherCards.length).toBe(0);
	});

	it("renders WeatherCardList component with no cards if cards prop is not provided", () => {
		renderWeatherCardList();

		const weatherCards = screen.queryAllByTestId("weather-card");
		expect(weatherCards.length).toBe(0);
	});
});
