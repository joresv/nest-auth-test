import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from 'src/users/domain/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async login(email: string, password: string): Promise<UserDto> {
    const user = await this.usersService.findOne(email);
    if (!user || user?.password !== password) {
      throw new UnauthorizedException('Email ou mot de passe incorrect');
    }
    return user?.toJson();
  }
}
