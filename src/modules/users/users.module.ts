import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { Deal } from '../deals/deals.entity';
import { Status } from '../statuses/statuses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Deal, Status])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
