import { TimestampEntites } from 'src/Generiques/Timestamp.entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends TimestampEntites {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column({
  //   length: 50,
  //   unique: true,
  // })
  // username: string;

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

  // @Column({
  //   type: 'enum',
  // })
  // role: string;
}
