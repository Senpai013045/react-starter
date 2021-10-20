import {combineClasses} from "./css-utils";

describe("css-utils", () => {
  describe("combineClasses", () => {
    it("should combine multiple different classes into single one", () => {
      expect(combineClasses("test", "test2")).toBe("test test2");
    });
    it("should omit undefined", () => {
      expect(combineClasses("test", undefined)).toBe("test");
    });
    it("should work with empty strings", () => {
      expect(combineClasses("test", "")).toBe("test");
    });
  });
});
