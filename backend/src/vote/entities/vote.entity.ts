import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import { NominationEntity } from 'src/nominate/nominate.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('vote')
export class VoteEntity extends TimestampEntites {
  @Column({
    name: 'id',
    primary: true,
    type: 'uuid',
    generated: 'uuid',
    length: 36,
    generatedType: 'STORED',
  })
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.vote, { cascade: true })
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => NominationEntity, (nomination) => nomination.vote)
  @JoinTable()
  nomination: NominationEntity;
}
