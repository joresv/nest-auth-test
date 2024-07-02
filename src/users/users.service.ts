import { Injectable } from '@nestjs/common';
import { User } from './domain/user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    new User('001', 'jores@gmail.com', '123456'),
    new User('002', 'Jores Tala', '123456'),
    new User('003', 'Valdes Nkenne', '123456'),
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.email === username);
  }
}
