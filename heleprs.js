export function getRandomInt(min=0, max=99999999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function times(n, func) {
  return Array.from(Array(n)).map(func)
}
export function isPowerOf2(v) {
  return v && !(v & (v - 1));
}