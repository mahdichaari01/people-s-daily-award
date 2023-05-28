import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { JWTPayloadType, UserType } from 'types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async signUp(user: { email: string; password: string; name: string }) {
    const { email, password, name } = user;
    await this.userService.findBy({ email }).then((user) => {
      if (user) {
        throw new UnauthorizedException('User already exists');
      }
    });
    try {
      const user = await this.userService.create({
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
    const user = await this.userService.findBy({ email: username });
    if (user) {
      // console.log(user);
      const same = await compare(pass, user.password);
      if (!same) return null;

      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  async ValidateUserData(
    user: Partial<UserType>,
  ): Promise<Omit<UserType, 'password'>> {
    const userFromDb = await this.userService.findBy(user);
    if (userFromDb && user) {
      const { email, name, id } = userFromDb;
      return { email, name, id };
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
