export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let order = weakMap.get(endpoint) || 0;
  order += 1;

  if (order >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, order);
  }
}
