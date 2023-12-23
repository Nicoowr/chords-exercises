export function modulo(elementIndex: number, arrayLength: number) {
  return ((elementIndex % arrayLength) + arrayLength) % arrayLength;
}
