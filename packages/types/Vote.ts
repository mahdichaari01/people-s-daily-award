import { NominationEntity } from './Nomination';
import { TimestampEntites } from './Timestampable';
import { UserEntity } from './User';

export interface VoteEntity extends TimestampEntites {
	id: string;

	user: UserEntity;
	nomination: NominationEntity;
}
