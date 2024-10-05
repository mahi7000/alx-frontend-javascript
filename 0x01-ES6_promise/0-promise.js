export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(Error('Failure'));
      }
    }, 2000);
  });
}
