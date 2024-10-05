export default function handleResponseFromAPI(promise) {
  const resolves = { status: 200, body: 'success' };

  return promise
    .then(() => resolves)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
