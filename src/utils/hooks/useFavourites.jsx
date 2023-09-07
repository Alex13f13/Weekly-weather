import { useDispatch, useSelector } from "react-redux";
import { setFavourites } from "../../store/slices/weatherSlice";

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

	return { favourites, isFavourite, toggleFavourite };
}
