import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class ImageDto {

    filename: string

    @IsString()
    @IsNotEmpty()
    is_it_carbs: boolean

    @IsString()
    @IsNotEmpty()
    is_it_prots: boolean

    @IsString()
    @IsNotEmpty()
    is_it_fats: boolean
}