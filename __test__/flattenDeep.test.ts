import flattenDeep from "../src/flattenDeep";

describe("flattenDeep", () => {
  it("should flatten a deeply nested array", () => {
    const result = flattenDeep([1, [2, [3, [4]], 5]]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty array if the input is an empty array", () => {
    const result = flattenDeep([]);
    expect(result).toEqual([]);
  });

  it("should return the same array if it is already flat", () => {
    const result = flattenDeep([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle arrays with mixed types", () => {
    const result = flattenDeep<number | string | boolean>([
      1,
      [2, "3", [4, true]],
      false,
    ]);
    expect(result).toEqual([1, 2, "3", 4, true, false]);
  });
});
