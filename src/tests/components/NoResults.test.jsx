import { render, screen } from "@testing-library/react";
import { NoResults } from "../../components/common";
import { LABEL } from "../../utils/constants";

describe("NoResults Component", () => {
	it("renders the 'No Results' message", () => {
		render(<NoResults />);

		const noResultsMessage = screen.getByText(LABEL.noResults);
		expect(noResultsMessage).toBeDefined();
	});

	it("matches snapshot", () => {
		const { container } = render(<NoResults />);
		expect(container).toMatchSnapshot();
	});
});
