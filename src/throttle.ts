export default function throttle(func: Function, wait: number): Function {
  let previous: number = 0;
  return function (this: any, ...args: any[]) {
    const now = Date.now();
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}

// test
const log = throttle((a: number) => console.log(a, "log"), 1000);
log(1);
log();
log();
log();
