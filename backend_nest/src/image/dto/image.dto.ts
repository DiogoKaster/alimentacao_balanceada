import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ImageDto {
  filename: string;

  @IsString()
  @IsNotEmpty()
  is_it_carbs: string;

  @IsString()
  @IsNotEmpty()
  is_it_prots: string;

  @IsString()
  @IsNotEmpty()
  is_it_fats: string;
}
