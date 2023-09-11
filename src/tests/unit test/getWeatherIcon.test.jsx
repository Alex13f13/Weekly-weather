import { getWeatherIcon } from "../../utils/getWeatherIcon";

describe("getWeatherIcon Function", () => {
	it("returns a sunny icon for 'despejado' weather", () => {
		const weatherDescription = "despejado";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a sunny icon for 'sol' weather", () => {
		const weatherDescription = "sol";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a water drop icon for 'lluvia' weather", () => {
		const weatherDescription = "lluvia";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a thunderstorm icon for 'tormenta' weather", () => {
		const weatherDescription = "tormenta";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a cloud icon for 'nublado' weather", () => {
		const weatherDescription = "nublado";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a cloud icon for 'cubierto' weather", () => {
		const weatherDescription = "cubierto";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a default sunny icon for 'soleado' weather (not in mappings)", () => {
		const weatherDescription = "soleado";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a water drop icon for 'lluvioso' weather with custom fontSize", () => {
		const weatherDescription = "lluvioso";
		const fontSize = "large";
		const icon = getWeatherIcon(weatherDescription, fontSize);
		expect(icon).toMatchSnapshot();
	});

	it("returns a default sunny icon for an empty weather description", () => {
		const weatherDescription = "";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a default sunny icon for a null weather description", () => {
		const weatherDescription = null;
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a default sunny icon for an undefined weather description", () => {
		const weatherDescription = undefined;
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});

	it("returns a default sunny icon for unknown weather descriptions", () => {
		const weatherDescription = "unknown";
		const icon = getWeatherIcon(weatherDescription);
		expect(icon).toMatchSnapshot();
	});
});
