export default function get(
  object: any,
  path: Array<string> | string,
  defaultValue: any = undefined
) {
  if (object == null || typeof object !== "object" || path == null) {
    return defaultValue;
  }

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

  let result = object;

  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (result[key] !== undefined) {
      result = result[key];
    } else {
      result = defaultValue;
      break;
    }
  }

  return result;
}
