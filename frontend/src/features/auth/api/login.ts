import { AuthResponse } from 'types';
import { axios } from '../../../lib/axios';
import { LoginCredentials } from './types';

export const login = async (credentials: LoginCredentials) => {
	const response = await axios.post<AuthResponse>('/auth/login', credentials);
	return response;
};
