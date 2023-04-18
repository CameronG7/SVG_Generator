const Shape = require("../Shape.js");
const Square = require("../Square.js");

describe("Square", () => {
	describe("render", () => {
		{
			it("should return a valid svg as a string", () => {
				const shape = new Square("blue", "aaa", "white");
				const svg = `
      <rect x="65" y="15" width="170" height="170"  fill="blue" />

      <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">aaa</text>`;
				expect(shape.render()).toEqual(svg);
			});
		}
	});
	describe("inheritances", () => {
		it("should inherit properties from Shape", () => {
			const shape = new Square("blue", "aaa", "white");
			const test = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
			expect(shape.baseLine()).toEqual(test);
		});
		it("should inherit properties from Shape", () => {
			const shape = new Square("blue", "aaa", "white");
			const test = `</svg>`;
			expect(shape.baseEnd()).toEqual(test);
		});
	});
});
