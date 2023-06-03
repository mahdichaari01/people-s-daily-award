import { axios } from '../../../lib/axios';
import { RegisterCredentials, AuthResponse } from './types';

export const register = async (user: RegisterCredentials) => {
	const response = await axios.post<AuthResponse>('/auth/signup', user);
	return response;
};
