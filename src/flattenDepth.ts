type NestedArray<T> = (T | NestedArray<T>)[];

export default function flattenDepth<T>(
  array: NestedArray<T>,
  depth: number = 1
): NestedArray<T> {
  if (depth === 0) {
    return [...array];
  }

  return array.reduce<NestedArray<T>>(
    (prev, cur) =>
      Array.isArray(cur)
        ? [...prev, ...flattenDepth(cur, depth - 1)]
        : [...prev, cur],
    []
  );
}
