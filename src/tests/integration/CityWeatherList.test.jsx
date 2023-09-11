import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { CityWeatherList } from "../../components/pageSections";
import { LABEL, PROVINCE, UNITS } from "../../utils/constants";
import { vi } from "vitest";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import { paths } from "../../router/paths";

const mockData = [
	{
		id: "28079",
		name: "Madrid",
		description: "Muy nuboso con tormenta y lluvia escasa",
		icon: "Muy nuboso con tormenta y lluvia escasa",
		temperatures: {
			max: "28",
			min: "19",
		},
	},
	{
		id: "28005",
		name: "Alcalá de Henares",
		description: "Intervalos nubosos con lluvia",
		icon: "Intervalos nubosos con lluvia",
		temperatures: {
			max: "30",
			min: "16",
		},
	},
];

vi.mock("../../services/weatherApi", async () => {
	const actual = await vi.importActual("../../services/weatherApi");
	return {
		...actual,
		useGetCitiesByProvinceIdQuery: vi.fn(() => ({
			data: mockData,
			isLoading: false,
			error: null,
		})),
	};
});

const history = createMemoryHistory();

describe("CityWeatherList Component", () => {
	let renderedComponent;

	beforeEach(() => {
		store.dispatch({ type: "weather/setSelectedProvince", payload: PROVINCE[15] });
		renderedComponent = render(
			<Provider store={store}>
				<MemoryRouter history={history} initialEntries={[paths.home]}>
					<CityWeatherList />
				</MemoryRouter>
			</Provider>
		);
	});

	it("renders without errors", () => {
		const { getByTestId } = renderedComponent;
		const cityWeatherList = getByTestId("city-weather-list");
		expect(cityWeatherList).toBeDefined();
	});

	it("displays city names when data is loaded", async () => {
		await waitFor(() => {
			const { getByText } = renderedComponent;
			const madridCity = getByText(mockData[0].name);
			const alcalaCity = getByText(mockData[1].name);
			expect(madridCity).toBeDefined();
			expect(alcalaCity).toBeDefined();
		});
	});

	it("displays city descriptions when data is loaded", async () => {
		await waitFor(() => {
			const { getByText } = renderedComponent;
			const madridDescription = getByText(mockData[0].description);
			const alcalaDescription = getByText(mockData[1].description);
			expect(madridDescription).toBeDefined();
			expect(alcalaDescription).toBeDefined();
		});
	});

	it("displays city temperatures when data is loaded", async () => {
		const maxLabelText = `${LABEL.max} `;
		const minLabelText = `${LABEL.min} `;

		await waitFor(() => {
			const { getByText } = renderedComponent;
			const madridMaxTemp = getByText(
				`${maxLabelText}${mockData[0].temperatures.max} ${UNITS.celsius}`
			);
			const madridMinTemp = getByText(
				`${minLabelText}${mockData[0].temperatures.min} ${UNITS.celsius}`
			);
			const alcalaMaxTemp = getByText(
				`${maxLabelText}${mockData[1].temperatures.max} ${UNITS.celsius}`
			);
			const alcalaMinTemp = getByText(
				`${minLabelText}${mockData[1].temperatures.min} ${UNITS.celsius}`
			);
			expect(madridMaxTemp).toBeDefined();
			expect(madridMinTemp).toBeDefined();
			expect(alcalaMaxTemp).toBeDefined();
			expect(alcalaMinTemp).toBeDefined();
		});
	});
});
