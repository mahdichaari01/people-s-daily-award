import { AuthResponse } from 'types';
import {
	LoginCredentials,
	RegisterCredentials,
	login,
	register,
	validateUser,
} from '../features/auth';
import storage from '../util/storage';
// import { queryClient } from "./react-query";

async function handleUserResponse(data: AuthResponse) {
	// console.log(data);
	const { access_token } = data;
	storage.setToken(access_token);
	// decode token to get user data
	const user = await validateUser();
	return user.data;
}

async function userFn() {
	try {
		const user = await validateUser();
		return user.data;
	} catch (error) {
		console.log(error);
		logoutFn();
		return Promise.reject(error);
	}
}

async function loginFn(data: LoginCredentials) {
	try {
		const response = await login(data);
		// console.log(response);
		const user = await handleUserResponse(response.data);
		// queryClient.resetQueries();
		return user;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

async function registerFn(data: RegisterCredentials) {
	try {
		const response = await register(data);
		const user = await handleUserResponse(response.data);
		// queryClient.resetQueries();
		return user;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}

async function logoutFn(): Promise<void> {
	storage.clearToken();
	// queryClient.resetQueries();
}

export {
	userFn as user,
	loginFn as login,
	registerFn as register,
	logoutFn as logout,
};
