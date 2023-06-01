import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { genSalt, hash } from 'bcrypt';
interface USERDTO {
  email: string;
  password: string;
  name: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: USERDTO) {
    const salt = await genSalt();
    const newUser = new UserEntity();
    Object.assign(newUser, user);
    newUser.salt = salt;
    newUser.password = await hash(user.password, salt);
    return this.userRepository.save(newUser);
  }

  async findAll() {
    return this.userRepository.find();
  }

  async findBy(criteria: Partial<UserEntity>) {
    return this.userRepository.findOneBy(criteria);
  }

  async update(user: { id: string } & Partial<UserEntity>) {
    const { salt, ...rest } = user;
    const userToUpdate = this.userRepository.findOneBy({ id: user.id });
    const OldSalt = user.salt;
    if (user.password) {
      rest.password = await hash(user.password, OldSalt);
    }
    Object.assign(userToUpdate, rest);
  }

  async delete(id: string) {
    return this.userRepository.delete(id);
  }
}
