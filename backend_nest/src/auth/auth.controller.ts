import { Body, Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    
    constructor(private authService: AuthService) {}
    
    @Post('sign-up')
    signUp(@Body() dto: AuthDto) {
        return this.authService.signUp(dto)
    }

    @Post('sign-in')
    signIn(@Body() dto: AuthDto) {
        return this.authService.signIn(dto)
    }
}
