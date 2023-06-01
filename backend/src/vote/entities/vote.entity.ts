import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import { NominationEntity } from 'src/nominate/nominate.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToOne, OneToOne } from 'typeorm';

@Entity('Vote')
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

  @OneToOne(() => UserEntity, (user) => user.vote)
  @JoinTable()
  user: UserEntity;

  @ManyToOne(() => NominationEntity, (nomination) => nomination.vote)
  @JoinTable()
  nomination: NominationEntity;
}
