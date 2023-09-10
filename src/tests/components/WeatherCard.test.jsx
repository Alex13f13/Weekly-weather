import { render, screen, fireEvent } from "@testing-library/react";
import { WeatherCard } from "../../components/common";
import { LABEL, UNITS } from "../../utils/constants";
import { vi } from "vitest";

describe("WeatherCard Component", () => {
	const defaultProps = {
		icon: <div>Icon</div>,
		weather: "Sunny",
		max: "30",
		min: "20",
		name: "City Name",
	};

	const renderWeatherCard = (props = {}) => {
		const combinedProps = { ...defaultProps, ...props };
		return render(<WeatherCard {...combinedProps} />);
	};

	it("renders WeatherCard component with the correct content", () => {
		renderWeatherCard();

		const card = screen.getByTestId("weather-card");
		const cityName = screen.getByText(defaultProps.name);
		const weatherText = screen.getByText(defaultProps.weather);
		const maxTemp = screen.getByText(`${LABEL.max} ${defaultProps.max} ${UNITS.celsius}`);
		const minTemp = screen.getByText(`${LABEL.min} ${defaultProps.min} ${UNITS.celsius}`);

		expect(card).toBeDefined();
		expect(cityName).toBeDefined();
		expect(weatherText).toBeDefined();
		expect(maxTemp).toBeDefined();
		expect(minTemp).toBeDefined();
	});

	it("calls the onClick function when the card is clicked", () => {
		const onClickMock = vi.fn();

		renderWeatherCard({ onClick: onClickMock });

		const card = screen.getByTestId("weather-card");

		fireEvent.click(card);

		expect(onClickMock).toHaveBeenCalled();
	});

	it("renders WeatherCard component if props are missing", () => {
		renderWeatherCard({
			icon: undefined,
			weather: undefined,
			max: undefined,
			min: undefined,
			name: undefined,
		});

		const card = screen.getByTestId("weather-card");
		const cityName = screen.queryByText(defaultProps.name);
		const weatherText = screen.queryByText(defaultProps.weather);
		const maxTemp = screen.queryByText(`${LABEL.max} ${defaultProps.max} ${UNITS.celsius}`);
		const minTemp = screen.queryByText(`${LABEL.min} ${defaultProps.min} ${UNITS.celsius}`);

		expect(card).toBeDefined();
		expect(cityName).toBeNull();
		expect(weatherText).toBeNull();
		expect(maxTemp).toBeNull();
		expect(minTemp).toBeNull();
	});

	it("matches snapshot", () => {
		const { container } = renderWeatherCard();
		expect(container).toMatchSnapshot();
	});
});
