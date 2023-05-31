import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import {
  Column,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NominationEntity } from '../../nominate/nominate.entity';
import { OneToMany } from 'typeorm';
import { VoteEntity } from 'src/vote/entities/vote.entity';
@Entity('user')
export class UserEntity extends TimestampEntites {
  @Column({
    name: 'id',
    primary: true,
    type: 'uuid',
    generated: 'uuid',
    length: 36,
    generatedType: 'STORED',
  })
  id: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  name: string;

  @OneToMany(() => NominationEntity, (nomination) => nomination.user)
  @JoinTable()
  nominations: NominationEntity[];

  @OneToOne(() => VoteEntity, (vote) => vote.user)
  @JoinTable()
  vote: VoteEntity;
}
