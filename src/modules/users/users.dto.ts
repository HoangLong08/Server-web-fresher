import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CheckUserExistDto {
  @IsNotEmpty({ message: 'The email is not empty' })
  @IsEmail()
  email: string;
}

export class CreateUserDto {
  @IsNotEmpty({ message: 'The email is not empty' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'The role should have a title' })
  @Length(3, 255)
  role: string;

  @IsNotEmpty({ message: 'The role should have a title' })
  @Length(3, 255)
  password: string;
}
