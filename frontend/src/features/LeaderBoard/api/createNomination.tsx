import { axios } from '../../../lib/axios';
import { NominationEntity } from 'types';

export const createNomination = async (nomination: {
	nomineeName: string;
	reason?: string;
	imageLink?: string;
	embed?: string;
}) => {
	const response = await axios.post('/nominations', nomination);
	return response;
};
