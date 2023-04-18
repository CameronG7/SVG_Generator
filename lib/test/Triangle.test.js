const Shape = require("../Shape.js");
const Triangle = require("../Triangle.js");

describe("Triangle", () => {
	describe("render", () => {
		
			it("should return a valid svg as a string", () => {
				const shape = new Triangle("blue", "aaa", "white");
				const svg = `
      <polygon points="150,10 270,190 30,190" fill="blue" />

      <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">aaa</text>`;
				expect(shape.render()).toEqual(svg);
			});
		
	});
  describe("inheritances", () => {
    it("should inherit properties from Shape", () => {
      const shape = new Triangle("blue", "aaa", "white");
      const test = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
      expect(shape.baseLine()).toEqual(test)

    });
    it("should inherit properties from Shape", () => {
      const shape = new Triangle("blue", "aaa", "white");
      const test = `</svg>`
      expect(shape.baseEnd()).toEqual(test)

    });
  });
});
