export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error(); // denominator cant be == 0
    }
    return numerator / denominator; // returns the answer
  } catch (error) {
    throw Error('cannot divide by 0'); // errror message
  }
}

