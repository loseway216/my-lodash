type NestedArray<T> = (T | NestedArray<T>)[];

export default function flattenDeep<T>(array: NestedArray<T>): NestedArray<T> {
  return array.reduce<NestedArray<T>>(
    (prev, cur) =>
      Array.isArray(cur) ? [...prev, ...flattenDeep(cur)] : [...prev, cur],
    []
  );
}
