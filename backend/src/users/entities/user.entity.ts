import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn } from 'typeorm';
import { UserType } from 'types';

@Entity('user')
export class User implements UserType {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
