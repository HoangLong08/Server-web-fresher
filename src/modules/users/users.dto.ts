import { IsEmail, IsNotEmpty } from 'class-validator';

export class CheckUserExistDto {
  @IsNotEmpty({ message: 'The email is not empty' })
  @IsEmail()
  email: string;
}
