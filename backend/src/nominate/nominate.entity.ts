import { Entity, PrimaryGeneratedColumn, Column, JoinTable } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { ManyToOne } from 'typeorm';
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

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.nominations, { cascade: true })
  @JoinTable()
  user: UserEntity;
}
