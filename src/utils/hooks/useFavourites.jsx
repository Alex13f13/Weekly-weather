import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../store/slices/weatherSlice";
import { weatherApi } from "../../services/weatherApi";

export default function useFavourites() {
	const dispatch = useDispatch();
	const { favourites } = useSelector((state) => state?.weather);

	const isFavourite = (id) => favourites?.includes(id);

	const toggleFavourite = (id) => {
		const updatedFavourites = isFavourite(id)
			? favourites?.filter((item) => item !== id)
			: [...(favourites || []), id];

		dispatch(setFavourites(updatedFavourites));
	};

	const getAllCitiesData = async (citiesId) => {
		const allPromises = citiesId.map((cityId) =>
			dispatch(
				weatherApi.endpoints.getCityWeatherById.initiate(cityId, {
					force: true,
					retry: false,
					refetchOnMountOrArgChange: true,
				})
			)
		);

		const getCitiesData = async () => await Promise.all(allPromises);
		return getCitiesData().then((data) => data?.map((item) => item?.data));
	};

	return { favourites, isFavourite, toggleFavourite, getAllCitiesData };
}
