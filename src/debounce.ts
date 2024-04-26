export default function debounce(func: Function, wait: number): Function {
  let timeout: number = 0;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
