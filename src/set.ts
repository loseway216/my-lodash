export default function set(
  object: any,
  path: Array<string> | string,
  value: any
) {
  if (object == null || typeof object !== "object") {
    return object;
  }

  const pathArray = Array.isArray(path)
    ? path
    : path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

  // support set(array, "[0].a", 2)
  if (pathArray[0] === "") {
    pathArray.shift();
  }

  let currentObject = object;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      currentObject[key] = value;
    } else {
      if (currentObject[key] === undefined) {
        const nextKey = pathArray[i + 1];
        currentObject[key] = isNaN(Number(nextKey)) ? {} : [];
      }
      currentObject = currentObject[key];
    }
  }

  return object;
}
