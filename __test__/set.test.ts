import set from "../src/set";

describe("set", () => {
  it("should set the value of a nested property in an object", () => {
    const object = { a: [{ b: { c: 3 } }] };

    set(object, "a[0].b.c", 4);
    expect(object.a[0].b.c).toBe(4);
  });

  it("should create nested properties if they don't exist", () => {
    const object: any = {};

    set(object, ["x", "0", "y", "z"], 5);
    expect(object.x[0].y.z).toBe(5);
  });

  it("should set the value of a top-level property in an object", () => {
    const object = { a: 1 };

    set(object, "a", 2);
    expect(object.a).toBe(2);
  });

  it("should set the value of a nested property in an array", () => {
    const array = [{ a: 1 }];

    set(array, "[0].a", 2);
    expect(array[0].a).toBe(2);
  });

  it("should handle non-existent paths", () => {
    const object: any = {};

    set(object, "a.b.c", 1);
    expect(object.a.b.c).toBe(1);
  });

  it("should handle non-existent nested properties", () => {
    const object: any = {};

    set(object, "a.b.c", 1);
    expect(object.a.b.c).toBe(1);
  });
});
