import Axios from 'axios';
import storage from '../util/storage';
const API_URL = 'http://localhost:3000';

export const axios = Axios.create({
	baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
	const token = storage.getToken();
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	config.headers.Accept = 'application/json';
	return config;
});

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		const message = error.response?.data?.message || error.message;
		console.log(message);
		return Promise.reject(error);
	}
);
