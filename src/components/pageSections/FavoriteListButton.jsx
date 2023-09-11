import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { paths } from "../../router/paths";
import useFavourites from "../../utils/hooks/useFavourites";
import { LABEL, VARIANT } from "../../utils/constants";

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export default function FavoriteListButton() {
	const navigate = useNavigate();
	const { favourites } = useFavourites();

	return (
		<StyledSection>
			<Button
				variant={VARIANT.outlined}
				endIcon={<FavoriteBorderOutlinedIcon />}
				disabled={!favourites?.length}
				onClick={() => {
					navigate(paths.favourites);
				}}
			>
				{LABEL.favListButton}
			</Button>
		</StyledSection>
	);
}
