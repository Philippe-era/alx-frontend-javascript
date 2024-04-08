export default function createIteratorObject(report) {
  let workers = [];
  for (const item of Object.values(report.workers)) {
    workers = [
      ...workers,
      ...item,
    ];
  }
  return workers;
}
