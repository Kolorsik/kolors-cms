import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { Deal } from '../deals/deals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Deal])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
