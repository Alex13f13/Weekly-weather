import styled from "styled-components";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/paths";
import useFavourites from "../../utils/hooks/useFavourites";

const StyledWrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export default function FavoriteListButton() {
	const navigate = useNavigate();
	const { favourites } = useFavourites();

	return (
		<StyledWrapper>
			<Button
				variant="outlined"
				endIcon={<FavoriteBorderOutlinedIcon />}
				disabled={!favourites?.length}
				onClick={() => {
					navigate(paths.favourites);
				}}
			>
				Lista de favoritos
			</Button>
		</StyledWrapper>
	);
}
