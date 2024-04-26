// JSON.parse(JSON.stringify(obj)) has limitation: functions, undefined, and circular references
export default function cloneDeep(obj: any): any {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => cloneDeep(item));
  }
  const result: any = {};
  for (const key in obj) {
    result[key] = cloneDeep(obj[key]);
  }
  return result;
}
