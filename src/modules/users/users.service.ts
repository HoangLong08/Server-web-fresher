import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckUserExistDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getAll() {
    const res = await this.userRepository.find();
    return res;
  }

  async getById(id: string) {
    const res = await this.userRepository.findOneBy({ id });
    return res;
  }

  async checkUserExist(body: CheckUserExistDto) {
    const res = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });
    return res;
  }

  async updateUserById(id: string, userDto: any) {
    return await this.userRepository.update(id, userDto);
  }

  async deleteUserById(id: string) {
    return await this.userRepository.delete(id);
  }
}
