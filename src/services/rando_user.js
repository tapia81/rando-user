import axios from 'axios';

const BASE_URL = 'https://api.randomuser.me/';

const fetchUser = async () => {
	let response = await axios.get(BASE_URL);
	return response.data;
};

export default fetchUser;
