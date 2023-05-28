import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { JWTPayloadType } from 'types';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: Partial<JWTPayloadType>) {
    //check the validity of the token
    if (
      payload.name === undefined ||
      payload.username === undefined ||
      payload.sub === undefined
    ) {
      return null;
    }
    // if()
    return {
      userId: payload.sub,
      username: payload.username,
      name: payload.name,
    };
  }
}
