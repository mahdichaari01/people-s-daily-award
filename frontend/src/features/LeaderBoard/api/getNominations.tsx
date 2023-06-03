import { axios } from '../../../lib/axios';
import { NominationEntity } from 'types';

export const getNominations = async (date: Date) => {
	const response = await axios.get<NominationEntity[]>('/nominations', {
		params: {
			date: date.toISOString(),
		},
	});
	console.log(response.data);
	return response.data.sort((a, b) => b.vote.length - a.vote.length);
};
