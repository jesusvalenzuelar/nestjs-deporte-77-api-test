import { IsDate, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El titulo debe contener al menos 10 caracteres' })
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsDate()
  createDate: Date;
}
