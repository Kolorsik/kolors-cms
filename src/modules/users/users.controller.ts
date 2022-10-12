import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: UserDto): Promise<User> {
    return this.userService.create(user);
  }
}
