import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { CityWeatherList } from "../../components/pageSections";
import { LABEL, PROVINCE_ID, UNITS } from "../../utils/constants";
import { vi } from "vitest";
import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import { paths } from "../../router/paths";
import citiesDataMock from "../mocks/citiesDataMock.json";

vi.mock("../../services/weatherApi", async () => {
	const actual = await vi.importActual("../../services/weatherApi");
	return {
		...actual,
		useGetCitiesByProvinceIdQuery: vi.fn(() => ({
			data: citiesDataMock,
			isLoading: false,
			error: null,
		})),
	};
});

const history = createMemoryHistory();

describe("CityWeatherList Component", () => {
	let renderedComponent;

	beforeEach(() => {
		store.dispatch({ type: "weather/setSelectedProvince", payload: PROVINCE_ID.A_Coruña });
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
			const madridCity = getByText(citiesDataMock[0].name);
			const alcalaCity = getByText(citiesDataMock[1].name);
			expect(madridCity).toBeDefined();
			expect(alcalaCity).toBeDefined();
		});
	});

	it("displays city descriptions when data is loaded", async () => {
		await waitFor(() => {
			const { getByText } = renderedComponent;
			const madridDescription = getByText(citiesDataMock[0].description);
			const alcalaDescription = getByText(citiesDataMock[1].description);
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
				`${maxLabelText}${citiesDataMock[0].temperatures.max} ${UNITS.celsius}`
			);
			const madridMinTemp = getByText(
				`${minLabelText}${citiesDataMock[0].temperatures.min} ${UNITS.celsius}`
			);
			const alcalaMaxTemp = getByText(
				`${maxLabelText}${citiesDataMock[1].temperatures.max} ${UNITS.celsius}`
			);
			const alcalaMinTemp = getByText(
				`${minLabelText}${citiesDataMock[1].temperatures.min} ${UNITS.celsius}`
			);
			expect(madridMaxTemp).toBeDefined();
			expect(madridMinTemp).toBeDefined();
			expect(alcalaMaxTemp).toBeDefined();
			expect(alcalaMinTemp).toBeDefined();
		});
	});
});
