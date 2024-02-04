import flattenDepth from "../src/flattenDepth";

describe("flattenDepth", () => {
  it("should flatten a nested array with depth 1", () => {
    const nestedArray = [1, [2, [3, [4]]]];
    const flattenedArray = flattenDepth(nestedArray, 1);
    expect(flattenedArray).toEqual([1, 2, [3, [4]]]);
  });

  it("should flatten a nested array with depth 2", () => {
    const nestedArray = [1, [2, [3, [4]]]];
    const flattenedArray = flattenDepth(nestedArray, 2);
    expect(flattenedArray).toEqual([1, 2, 3, [4]]);
  });

  it("should flatten a nested array with depth 3", () => {
    const nestedArray = [1, [2, [3, [4]]]];
    const flattenedArray = flattenDepth(nestedArray, 3);
    expect(flattenedArray).toEqual([1, 2, 3, 4]);
  });

  it("should not modify a flat array", () => {
    const flatArray = [1, 2, 3, 4];
    const flattenedArray = flattenDepth(flatArray, 1);
    expect(flattenedArray).toEqual([1, 2, 3, 4]);
  });
});
