import { render, screen } from "@testing-library/react";
import { CityDayDetails } from "../../components/pageSections";
import { vi } from "vitest";
import { LABEL, UNITS } from "../../utils/constants";

const mockData = {
	originURL: "https://www.aemet.es",
	name: "Madrid",
	today: {
		temperature: {
			now: "21",
			max: "28",
			min: "19",
		},
		wind: "8",
		uv: "5",
		humidity: "79",
		day: "2023-09-10",
		weather: "Muy nuboso",
	},
	nextDays: [
		{
			name: "2023-09-11",
			temperatures: {
				max: "25",
				min: "17",
			},
			description: "Nuboso con lluvia escasa",
			icon: "Nuboso con lluvia escasa",
		},
		{
			name: "2023-09-12",
			temperatures: {
				max: "26",
				min: "16",
			},
			description: "Intervalos nubosos",
			icon: "Intervalos nubosos",
		},
		{
			name: "2023-09-13",
			temperatures: {
				max: "27",
				min: "16",
			},
			description: "Poco nuboso",
			icon: "Poco nuboso",
		},
		{
			name: "2023-09-14",
			temperatures: {
				max: "27",
				min: "17",
			},
			description: "Intervalos nubosos",
			icon: "Intervalos nubosos",
		},
		{
			name: "2023-09-15",
			temperatures: {
				max: "25",
				min: "17",
			},
			description: "Muy nuboso con lluvia",
			icon: "Muy nuboso con lluvia",
		},
		{
			name: "2023-09-16",
			temperatures: {
				max: "24",
				min: "16",
			},
			description: "Nuboso con lluvia",
			icon: "Nuboso con lluvia",
		},
	],
};

vi.mock("../../services/weatherApi", () => ({
	useGetCityDetailWeatherByIdQuery: vi.fn(() => ({
		data: mockData,
		isLoading: false,
		error: null,
	})),
}));

describe("CityDayDetails Component", () => {
	it("renders CityHeader component with data", () => {
		render(<CityDayDetails id="1" />);

		const cityName = screen.getByText(mockData.name);
		const day = screen.getByText(mockData.today.day);

		expect(cityName).toBeDefined();
		expect(day).toBeDefined();
	});

	it("renders WeatherInfo component with data", () => {
		render(<CityDayDetails id="1" />);

		const currentTemp = screen.getByText(
			`${LABEL.temperature} ${mockData.today.temperature.now} ${UNITS.celsius}`
		);
		const maxTemp = screen.getByText(
			`${LABEL.temperatureMax} ${mockData.today.temperature.max} ${UNITS.celsius}`
		);
		const minTemp = screen.getByText(
			`${LABEL.temperatureMin} ${mockData.today.temperature.min} ${UNITS.celsius}`
		);

		expect(currentTemp).toBeDefined();
		expect(maxTemp).toBeDefined();
		expect(minTemp).toBeDefined();
	});

	it("renders EnvironmentInfo component with data", () => {
		render(<CityDayDetails id="1" />);

		const wind = screen.getByText(`${LABEL.wind} ${mockData.today.wind} ${UNITS.kmh}`);
		const humidity = screen.getByText(
			`${LABEL.humidity} ${mockData.today.humidity} ${UNITS.percent}`
		);

		expect(wind).toBeDefined();
		expect(humidity).toBeDefined();
	});
});
