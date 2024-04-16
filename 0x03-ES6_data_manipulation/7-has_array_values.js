export default function hasValuesFromArray(s, arr) {
  for (const initial of arr) {
    if (!s.has(initial)) {
      return false;
    }
  }
  return true;
}

