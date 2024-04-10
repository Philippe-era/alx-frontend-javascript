import { uploadPhoto, createUser } from './utils'; //imprt files

const asyncUploadUser = async () => { // function to be used
  try {
    const photo = await uploadPhoto(); // Object created
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
