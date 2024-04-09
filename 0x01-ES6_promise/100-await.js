import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
	let photo_taken;
	let client;
	try {
		photo_taken = await uploadPhoto();
		client= await createUser();
		catch (error) {
			photo_taken = null;
			client = null;
		}
		return { photo_taken, client };
	}
}
