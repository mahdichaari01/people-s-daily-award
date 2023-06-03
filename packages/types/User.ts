import { NominationEntity } from './Nomination';
import { TimestampEntites } from './Timestampable';
import { VoteEntity } from './Vote';

export interface UserEntity extends TimestampEntites {
	id: string;

	email: string;

	password: string;

	salt: string;

	imageLink: string;

	name: string;

	nominations: NominationEntity[];

	vote: VoteEntity[];
}
