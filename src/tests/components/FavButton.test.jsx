import { render, screen, fireEvent } from "@testing-library/react";
import { FavButton } from "../../components/common";
import { LABEL } from "../../utils/constants";
import { vi } from "vitest";

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
		const onClickMock = vi.fn();

		render(<FavButton isFavorite={false} onClick={onClickMock} />);

		const favoriteButton = screen.getByLabelText(LABEL.favourite);
		fireEvent.click(favoriteButton);

		expect(onClickMock).toHaveBeenCalled();
	});

	it("matches snapshot", () => {
		const { container } = render(<FavButton isFavorite={false} />);
		expect(container).toMatchSnapshot();
	});
});
