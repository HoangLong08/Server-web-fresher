import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register() {
    return 'new user';
  }

  login() {
    return 'login';
  }
}
