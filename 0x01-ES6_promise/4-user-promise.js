export default function signUpUser(firstName, lastName) {
  const success = true;
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ firstName, lastName });
    } else {
      reject(new Error('Sign up failed'));
    }
  });
}
