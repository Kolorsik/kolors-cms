import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  @Render('index')
  async getHello(): Promise<any> {
    return {
      message: this.appService.getHello(),
      users: await this.userService.findAll(),
    };
  }
}
