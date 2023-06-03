import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import { Column, Entity, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { NominationEntity } from '../../nominate/nominate.entity';
import { ManyToOne, OneToMany } from 'typeorm';
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

  @Column({ type: 'varchar', length: 255, nullable: true })
  imageLink: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  name: string;

  @OneToMany(() => NominationEntity, (nomination) => nomination.user)
  @JoinTable()
  nominations: NominationEntity[];

  @OneToMany(() => VoteEntity, (vote) => vote.user)
  @JoinTable()
  vote: VoteEntity[];
}
