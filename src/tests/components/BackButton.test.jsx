import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { BackButton } from "../../components/common";
import { paths } from "../../router/paths";
import { LABEL } from "../../utils/constants";

describe("BackButton Component", () => {
	beforeEach(() => {
		render(
			<MemoryRouter initialEntries={[paths.favourites]}>
				<Routes>
					<Route path={paths.home} element={<BackButton />} />
					<Route
						path={paths.favourites}
						element={<BackButton />}
						elementProps={{ history: { location: { pathname: paths.home } } }}
					/>
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
		expect(window.location.pathname).toBe(paths.home);
	});
});
