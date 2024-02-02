import get from "../src/get";

describe("get", () => {
  it("should return the value at the specified path in the object", () => {
    const object = {
      foo: {
        bar: {
          baz: "qux",
        },
      },
    };

    expect(get(object, "foo.bar.baz")).toBe("qux");
  });

  it("should return the default value if the path does not exist in the object", () => {
    const object = {
      foo: {
        bar: {
          baz: "qux",
        },
      },
    };

    expect(get(object, "foo.bar.quux", "default")).toBe("default");
  });

  it("should return the default value if the object is null or undefined", () => {
    expect(get(null, "foo.bar.baz", "default")).toBe("default");
    expect(get(undefined, "foo.bar.baz", "default")).toBe("default");
  });

  // it("should return the default value if the path is not a string or an array", () => {
  //   const object = {
  //     foo: {
  //       bar: {
  //         baz: "qux",
  //       },
  //     },
  //   };

  //   expect(get(object, 123, "default")).toBe("default");
  //   expect(get(object, true, "default")).toBe("default");
  //   expect(get(object, null, "default")).toBe("default");
  //   expect(get(object, undefined, "default")).toBe("default");
  //   expect(get(object, {}, "default")).toBe("default");
  // });
});
