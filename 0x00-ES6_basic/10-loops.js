export default function appendToEachArrayValue(array, appendString) {
  const array_loop = [];
  for (const index of array) {
    const value_check = index;
    array_loop.push(appendString + value_check);
  }

  return array_loop;
}
