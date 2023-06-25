import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CheckUserExistDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('check-user-exist')
  async checkUserExist(@Body() body: CheckUserExistDto) {
    return this.usersService.checkUserExist(body);
  }
}
