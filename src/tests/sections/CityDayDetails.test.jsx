import { render, screen } from "@testing-library/react";
import { CityDayDetails } from "../../components/pageSections";
import { vi } from "vitest";
import { LABEL, UNITS } from "../../utils/constants";
import cityDataMock from "../mocks/cityDataMock";

vi.mock("../../services/weatherApi", () => ({
	useGetCityDetailWeatherByIdQuery: vi.fn(() => ({
		data: cityDataMock,
		isLoading: false,
		error: null,
	})),
}));

describe("CityDayDetails Component", () => {
	it("renders CityHeader component with data", () => {
		render(<CityDayDetails id="1" />);

		const cityName = screen.getByText(cityDataMock.name);
		const day = screen.getByText(cityDataMock.today.day);

		expect(cityName).toBeDefined();
		expect(day).toBeDefined();
	});

	it("renders WeatherInfo component with data", () => {
		render(<CityDayDetails id="1" />);

		const currentTemp = screen.getByText(
			`${LABEL.temperature} ${cityDataMock.today.temperature.now} ${UNITS.celsius}`
		);
		const maxTemp = screen.getByText(
			`${LABEL.temperatureMax} ${cityDataMock.today.temperature.max} ${UNITS.celsius}`
		);
		const minTemp = screen.getByText(
			`${LABEL.temperatureMin} ${cityDataMock.today.temperature.min} ${UNITS.celsius}`
		);

		expect(currentTemp).toBeDefined();
		expect(maxTemp).toBeDefined();
		expect(minTemp).toBeDefined();
	});

	it("renders EnvironmentInfo component with data", () => {
		render(<CityDayDetails id="1" />);

		const wind = screen.getByText(`${LABEL.wind} ${cityDataMock.today.wind} ${UNITS.kmh}`);
		const humidity = screen.getByText(
			`${LABEL.humidity} ${cityDataMock.today.humidity} ${UNITS.percent}`
		);

		expect(wind).toBeDefined();
		expect(humidity).toBeDefined();
	});
});
