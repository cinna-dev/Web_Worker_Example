export function getTime() {
  return "[" + Math.round(Date.now() * 0.01) + "]";
}

export function getOutput(text) {
  return getTime() + " " + text + "\n";
}

export function fibonacci(n) {
  if (n <= 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

export default { getTime, getOutput, fibonacci };
