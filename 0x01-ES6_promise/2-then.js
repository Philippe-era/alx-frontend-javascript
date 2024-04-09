function handleResponseFromAPI(promise) {
	const body = { status: 200, body: 'success' };i
	return promise
		.then(() => body)
		.catch((error) => error) // catches an error but doesnt stop the program from running
		.finally(() => console.log('Got a response from the API')); // this message will be displayed regardless
}
export default handleResponseFromAPI;

