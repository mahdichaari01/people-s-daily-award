import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
// import { CreateUserDto } from 'src/users/dtos/createUser.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request) {
    // return "loggedIn"
    return this.authService.login(request.user);
  }

  @Post('signup')
  async signUp(
    @Body() user: { email: string; password: string; name: string },
  ) {
    return this.authService.signUp(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  //decodes the token and returns the user
  async testRoute(@Request() request) {
    return request.user;
  }
}
