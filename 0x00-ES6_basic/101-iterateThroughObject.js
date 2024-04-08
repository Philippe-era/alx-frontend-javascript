export default function iterateThroughObject(reportWithIterator) {
	let workers = '';
	for (const item of reportWithIterator) {
		workers += `${item} | `;
	}
	return workers.slice(0, -3);
}


