import { renderHook, act } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../store/slices/weatherSlice";
import { weatherApi } from "../../services/weatherApi";
import useFavourites from "../../utils/hooks/useFavourites";
import { vi } from "vitest";

vi.mock("react-redux", () => ({
	useDispatch: vi.fn(),
	useSelector: vi.fn(),
}));

const mockDispatch = vi.fn();

describe("useFavourites Hook", () => {
	beforeEach(() => {
		useDispatch.mockReturnValue(mockDispatch);
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	it("should initialize with an empty favourites array", () => {
		useSelector.mockImplementation((selector) => selector({ weather: { favourites: [] } }));
		const { result } = renderHook(() => useFavourites());

		expect(result.current.favourites).toEqual([]);
	});

	it("should add a city with toggle  as a favourite", () => {
		useSelector.mockImplementation((selector) => selector({ weather: { favourites: ["city1"] } }));
		const { result } = renderHook(() => useFavourites());

		act(() => {
			result.current.toggleFavourite("city1");
		});

		expect(mockDispatch).toHaveBeenCalledWith(setFavourites([]));
	});

	it("should quit a city with toggle as a favourite", () => {
		useSelector.mockImplementation((selector) => selector({ weather: { favourites: [] } }));
		const { result } = renderHook(() => useFavourites());

		act(() => {
			result.current.toggleFavourite("city1");
		});

		expect(mockDispatch).toHaveBeenCalledWith(setFavourites(["city1"]));
	});

	it("should check if a city is a favourite", () => {
		useSelector.mockImplementation((selector) => selector({ weather: { favourites: ["city1"] } }));
		const { result } = renderHook(() => useFavourites());

		expect(result.current.isFavourite("city1")).toBe(true);
		expect(result.current.isFavourite("city2")).toBe(false);
	});

	it("should fetch data for all favourite cities", async () => {
		const { result } = renderHook(() => useFavourites());

		useSelector.mockImplementation((selector) =>
			selector({ weather: { favourites: ["city1", "city2"] } })
		);

		const mockGetCityWeatherById = vi.fn().mockResolvedValue({ data: "cityData" });
		weatherApi.endpoints.getCityWeatherById.initiate = mockGetCityWeatherById;

		await act(async () => {
			await result.current.getAllCitiesData(["city1", "city2"]);
		});

		expect(mockGetCityWeatherById).toHaveBeenCalledWith("city1", {
			force: true,
			retry: false,
			refetchOnMountOrArgChange: true,
		});
		expect(mockGetCityWeatherById).toHaveBeenCalledWith("city2", {
			force: true,
			retry: false,
			refetchOnMountOrArgChange: true,
		});
	});
});
