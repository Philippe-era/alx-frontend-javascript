import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const prom = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const success = [];
  return Promise.allSettled(prom).then((results) => {
    results.map(({ status, value, reason }) => (
      result.push({
        status,
        value: status === 'rejected' ? reason.toString() : value,
      })
    ));
    return success;
  });
}

