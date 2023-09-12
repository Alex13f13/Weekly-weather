import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { BackButton } from "../../components/common";
import { paths } from "../../router/paths";
import { LABEL } from "../../utils/constants";
import { createMemoryHistory } from "history";

describe("BackButton Component", () => {
	const history = createMemoryHistory({
		initialEntries: [paths.favourites],
	});
	beforeEach(() => {
		render(
			<MemoryRouter initialEntries={[paths.favourites]}>
				<Routes>
					<Route path={paths.home} element={<BackButton />} />
					<Route path={paths.favourites} element={<BackButton />} elementProps={{ history }} />
				</Routes>
			</MemoryRouter>
		);
	});

	it("renders a back button", () => {
		const backButton = screen.getByLabelText(LABEL.back);
		expect(backButton).toBeDefined();
	});

	it("navigates back when clicked", () => {
		const backButton = screen.getByLabelText(LABEL.back);
		fireEvent.click(backButton);
		expect(history.location.pathname).toBe(paths.favourites);
	});
});
