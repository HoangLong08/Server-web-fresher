import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CheckUserExistDto, CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  async getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const res = await this.usersService.getById(id);
    if (res) {
      return res;
    }
    return {
      statusCode: 404,
      message: 'User not found',
      error: 'Not Found',
    };
  }

  @Post('check-user-exist')
  async checkUserExist(@Body() body: CheckUserExistDto) {
    return this.usersService.checkUserExist(body);
  }

  @Put(':id')
  updateUserById(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return this.usersService.updateUserById(id, userDto);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.usersService.deleteUserById(id);
  }
}
