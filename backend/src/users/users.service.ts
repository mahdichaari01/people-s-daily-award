import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { ChangePasswordDto } from './dtos/createUser.dto';
import { UserType } from 'types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: Omit<UserType, 'id'>) {
    return this.usersRepository.save(user);
  }

  changePassword(id: string, password: string) {
    return this.usersRepository.update(id, { password: password });
  }

  async findUserByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
  getUsers() {
    return this.usersRepository.find();
  }
}
