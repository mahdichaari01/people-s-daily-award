import { axios } from '../../../lib/axios';
import { AuthUser } from './types';

export const validateUser = async () => {
	const response = await axios.get<AuthUser>('/auth/test');
	return response;
};
