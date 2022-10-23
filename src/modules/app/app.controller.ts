import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { UsersService } from '../users/users.service';
import { RenderUsersPageDto } from './dto/renderUsersPageDto.dto';
import { RenderUserPageDto } from './dto/renderUserPageDto.dto';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  redirect(@Res() res: Response): void {
    return res.status(302).redirect('/users');
  }

  @Get('/users')
  @Render('index')
  async getUsers(): Promise<RenderUsersPageDto> {
    const users = await this.userService.findAll();
    return { users };
  }

  @Get('/users/:id')
  @Render('user')
  async getUserById(@Param('id') userId: string): Promise<RenderUserPageDto> {
    const user = await this.userService.findById(userId);
    return { user };
  }
}
