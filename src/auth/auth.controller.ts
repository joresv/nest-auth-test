import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  login(@Body() loginCommand: any) {
    const { email, password } = loginCommand;
    return this.authService.login(email, password);
  }
}
