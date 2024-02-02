import get from "../src/get";

describe("get", () => {
  it("should return the value at the specified path", () => {
    const obj = { a: [{ b: { c: 3 } }] };

    expect(get(obj, "a[0].b.c")).toEqual(3);
    expect(get(obj, ["a", "0", "b", "c"])).toEqual(3);
  });

  it("should return undefined if the path does not exist", () => {
    const obj = {
      foo: {
        bar: {
          baz: "qux",
        },
      },
    };

    const result = get(obj, "foo.bar.quux");

    expect(result).toBeUndefined();
  });

  it("should return the default value if the path does not exist", () => {
    const obj = {
      foo: {
        bar: {
          baz: "qux",
        },
      },
    };

    const defaultValue = "default";

    const result = get(obj, "foo.bar.quux", defaultValue);

    expect(result).toEqual(defaultValue);
  });
});
