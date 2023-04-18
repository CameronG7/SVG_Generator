const Shape = require("../Shape.js");

describe("Shape", () => {
	describe("constructor", () => {
		it("should prevent invalid hexadecimal values for shape colors", () => {
			expect(() => {
				new Shape("Circle", "#0gf", "aaa", "blue");
			}).toThrow();

			expect(() => {
				new Shape("Circle", "blue", "aaa", "#0gf");
			}).toThrow();
			expect(() => {
				new Shape("Circle", "", "aaa", "#0ff");
			}).toThrow();
		});

		it("should prevent text values over 3 characters", () => {
			expect(() => {
				new Shape("Circle", "#0ff", "aaaa", "blue");
			}).toThrow();
		});
		// no need to test the shape property as the prompt only allows 3 hard coded choices
	});
});
