import { axios } from '../../../lib/axios';
import { NominationEntity } from 'types';

export const submitVote = async (nominationId: number) => {
	const response = await axios.post('/vote', { nominationId });
	return response;
};
