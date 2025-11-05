export const sleepFn = (ms = 0) =>
  new Promise(r => setTimeout(r, Number(ms) || 0));
