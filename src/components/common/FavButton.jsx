import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export default function FavButton({ isFavorite, onClick = () => {} }) {
	return (
		<IconButton aria-label="favourite" size="large" onClick={onClick}>
			{isFavorite ? <HeartBrokenIcon /> : <FavoriteIcon />}
		</IconButton>
	);
}
