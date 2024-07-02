import { UserDto } from "./dto/user.dto";

export class User {
  id: string;
  constructor(readonly userId, readonly email: string, readonly password: string) { }

  toJson(): UserDto {
    return {
      id: this.userId,
      email: this.email,
      password: this.password,
    }
  }
}