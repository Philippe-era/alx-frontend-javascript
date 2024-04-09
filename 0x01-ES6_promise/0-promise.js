export default function getResponseFromAPI() {
  const api_correct = true;
  return new Promise((resolve, reject) => {
    if (api_correct) {
      resolve(); // Correct message aired
    } else {
      reject(); // error message displayed
    }
  });
}
