import { getFirstString } from "../../utils/getFirstString";

describe("getFirstString Function", () => {
	it("returns the input string when given a string", () => {
		const input = "Hello, World!";
		const result = getFirstString(input);
		expect(result).toBe(input);
	});

	it("returns the first element of the array when given an array of strings", () => {
		const input = ["Apple", "Banana", "Cherry"];
		const result = getFirstString(input);
		expect(result).toBe("Apple");
	});

	it("returns null when given a null input", () => {
		const input = null;
		const result = getFirstString(input);
		expect(result).toBeNull();
	});

	it("returns undefined when given an undefined input", () => {
		const input = undefined;
		const result = getFirstString(input);
		expect(result).toBeUndefined();
	});

  it("returns an empty string when given an empty string", () => {
		const input = "";
		const result = getFirstString(input);
		expect(result).toBe("");
	});

	it("returns the first element when given an array of numbers", () => {
		const input = [42, 24, 36];
		const result = getFirstString(input);
		expect(result).toBe(42);
	});

});
