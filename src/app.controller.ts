import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get('/')
  redirect(@Res() res: Response) {
    res.status(302).redirect('/users');
  }

  @Get('/users')
  @Render('index')
  async getHello(): Promise<any> {
    return {
      message: this.appService.getHello(),
      users: await this.userService.findAll(),
    };
  }

  @Get('/users/:id')
  @Render('user')
  async getUserById(@Param('id') userId: string): Promise<any> {
    const user = await this.userService.findById(userId);
    return { user };
  }
}
