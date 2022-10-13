import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal } from '../deals/deals.entity';
import { User } from '../users/users.entity';
import { StatusesController } from './statuses.controller';
import { Status } from './statuses.entity';
import { StatusesService } from './statuses.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Deal, Status])],
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule {}
