import { openLink } from "../../utils/openLink";
import { vi } from "vitest";

window.open = vi.fn();

describe("openLink Function", () => {
	afterEach(() => {
		window.open.mockClear();
	});

	it("opens a new window with the provided link", () => {
		const link = "https://www.example.com";
		openLink(link);
		expect(window.open).toHaveBeenCalledWith(link);
	});

	it("opens a new window with a different link", () => {
		const link = "https://www.openai.com";
		openLink(link);
		expect(window.open).toHaveBeenCalledWith(link);
	});

	it("opens a new window with a custom link", () => {
		const link = "https://custom-link.com";
		openLink(link);
		expect(window.open).toHaveBeenCalledWith(link);
	});

	it("does not open a new window with an empty link", () => {
		const link = "";
		openLink(link);
		expect(window.open).not.toHaveBeenCalled();
	});

	it("does not open a new window with a null link", () => {
		const link = null;
		openLink(link);
		expect(window.open).not.toHaveBeenCalled();
	});

	it("does not open a new window with an undefined link", () => {
		const link = undefined;
		openLink(link);
		expect(window.open).not.toHaveBeenCalled();
	});

});
