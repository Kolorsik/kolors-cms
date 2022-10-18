import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get('/')
  @Render('index')
  async getHello(): Promise<any> {
    return {
      message: this.appService.getHello(),
      users: await this.userService.findAll(),
    };
  }

  @Get('/:id')
  @Render('user')
  async getUserById(@Param('id') userId: string): Promise<any> {
    const user = await this.userService.findById(userId);
    return { user };
  }
}
