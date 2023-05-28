import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { UsersService } from 'src/users/users.service';
import { JWTPayloadType, UserType } from 'types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signUp(user: CreateUserDto) {
    const { email, password, name } = user;
    await this.usersService.findUserByEmail(email).then((user) => {
      if (user) {
        throw new UnauthorizedException('User already exists');
      }
    });
    try {
      const user = await this.usersService.create({
        email: email,
        password: password,
        name: name,
      });
      return this.login(user);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<Omit<UserType, 'password'>> {
    // console.log(username, pass);
    const user = await this.usersService.findUserByEmail(username);
    if (user && user.password === pass) {
      // console.log(user);
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async ValidateUserData(
    user: Omit<UserType, 'password'>,
  ): Promise<Omit<UserType, 'password'>> {
    const userFromDb = await this.usersService.findUserByEmail(user.email);
    if (userFromDb && user) {
      const { password, ...result } = userFromDb;
      return result;
    }
    return null;
  }

  async login(user: UserType) {
    const payload: JWTPayloadType = {
      username: user.email,
      sub: user.id,
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
