let counter = 0;

export function createMSG (type, text) {
  counter += 1;
  return {
    id: counter,
    type,
    text,
  }
}
