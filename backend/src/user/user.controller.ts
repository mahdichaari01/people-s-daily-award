import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getAll() {
    return this.userService.findAll();
  }
  @Post()
  async create(
    //TODO: create a DTO for this
    @Body() user: { email: string; password: string; name: string },
  ) {
    return this.userService.create(user);
  }
}
