import { TimestampEntites } from './Timestampable';
import { UserEntity } from './User';
import { VoteEntity } from './Vote';

export interface NominationEntity extends TimestampEntites {
	id: number;
	nomineeName: string;
	reason: string;
	imageLink: string;
	createdAt: Date;
	embed: string;
	user: UserEntity;
	vote: VoteEntity[];
}
