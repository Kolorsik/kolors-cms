import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from '../statuses/statuses.entity';
import { StatusesService } from '../statuses/statuses.service';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { DealsController } from './deals.controller';
import { Deal } from './deals.entity';
import { DealsService } from './deals.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Deal, Status])],
  controllers: [DealsController],
  providers: [DealsService, UsersService, StatusesService],
})
export class DealsModule {}
