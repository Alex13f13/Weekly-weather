import { render, screen, fireEvent } from "@testing-library/react";
import { FavButton } from "../../components/common";
import { LABEL } from "../../utils/constants";

describe("FavButton Component", () => {
	it("renders the favorite button initially", () => {
		render(<FavButton isFavorite={false} />);

		const favoriteButton = screen.getByLabelText(LABEL.favourite);
		expect(favoriteButton).toBeDefined();
	});

	it("renders the heart broken button when marked as favorite", () => {
		render(<FavButton isFavorite={true} />);

		const heartBrokenButton = screen.getByLabelText(LABEL.favourite);
		expect(heartBrokenButton).toBeDefined();
	});

	it("calls the provided onClick function when clicked", () => {
		let onClickCalled = false;
		const onClickMock = () => {
			onClickCalled = true;
		};

		render(<FavButton isFavorite={false} onClick={onClickMock} />);

		const favoriteButton = screen.getByLabelText(LABEL.favourite);
		fireEvent.click(favoriteButton);

		expect(onClickCalled).toBe(true);
	});

	it("matches snapshot", () => {
		const { container } = render(<FavButton isFavorite={false} />);
		expect(container).toMatchSnapshot();
	});
});
