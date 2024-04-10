export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error()) // an error to be displayed 
    .finally(() => console.log('Got a response from the API')); // message to be displayed regardless
}
