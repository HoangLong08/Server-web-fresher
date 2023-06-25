import { Injectable } from '@nestjs/common';
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

  async checkUserExist(body: CheckUserExistDto) {
    const res = await this.userRepository.findOne({
      where: {
        email: body.email,
      },
    });
    console.log('res: ', res);
    return res;
  }
}
