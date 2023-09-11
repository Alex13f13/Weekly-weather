import { render, screen } from "@testing-library/react";
import { Loading } from "../../components/common";
import { LABEL } from "../../utils/constants";

describe("Loading Component", () => {
	it("renders the loading message", () => {
		render(<Loading />);

		const loadingMessage = screen.getByText(LABEL.loading);
		expect(loadingMessage).toBeDefined();
	});

	it("matches snapshot", () => {
		const { container } = render(<Loading />);
		expect(container).toMatchSnapshot();
	});
});
