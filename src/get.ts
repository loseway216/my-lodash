export default function get(
  object: any,
  path: Array<string> | string,
  defaultValue?: any
) {
  let result = object;
  let pathArray: Array<string>;

  if (typeof path === "string") {
    pathArray = path.split(".");
  } else {
    pathArray = path;
  }

  for (let i = 0; i < pathArray.length; i++) {
    if (result[pathArray[i]] !== undefined) {
      result = result[pathArray[i]];
    } else {
      return defaultValue ?? undefined;
    }
  }

  return result;
}
