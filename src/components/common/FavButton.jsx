import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { SIZE, LABEL } from "../../utils/constants";

export default function FavButton({ isFavorite, onClick = () => {} }) {
	return (
		<IconButton aria-label={LABEL.favourite} size={SIZE.large} onClick={onClick}>
			{isFavorite ? <HeartBrokenIcon /> : <FavoriteIcon />}
		</IconButton>
	);
}
