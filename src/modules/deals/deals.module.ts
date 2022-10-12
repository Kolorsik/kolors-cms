import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { DealsController } from './deals.controller';
import { Deal } from './deals.entity';
import { DealsService } from './deals.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Deal])],
  controllers: [DealsController],
  providers: [DealsService, UsersService],
})
export class DealsModule {}
