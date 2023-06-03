import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { ManyToOne } from 'typeorm';
import { VoteEntity } from 'src/vote/entities/vote.entity';
@Entity('nominations')
export class NominationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nomineeName: string;

  @Column({ type: 'text', nullable: true })
  reason: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imageLink: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  embed: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.nominations, { cascade: true })
  @JoinTable()
  user: UserEntity;

  @OneToMany(() => VoteEntity, (vote) => vote.nomination, { eager: true })
  @JoinTable()
  vote: VoteEntity[];
}
