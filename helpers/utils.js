export const range = (start, end) =>
  [...Array(1 + end - start).keys()].map(v => start + v)
