import { IsNotEmpty, Length } from 'class-validator';

export class CreateFeedDto {
  @IsNotEmpty({ message: 'The feed should have a title' })
  @Length(3, 255)
  title: string;
}
