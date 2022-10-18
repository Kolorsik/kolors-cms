import { Body, Controller, Get, Post } from '@nestjs/common';
import { StatusDto } from './dto/statuses.dto';
import { Status } from './statuses.entity';
import { StatusesService } from './statuses.service';

@Controller('api/statuses')
export class StatusesController {
  constructor(private readonly statusService: StatusesService) {}

  @Get()
  getAllStatuses(): Promise<Status[]> {
    return this.statusService.findAll();
  }

  @Post()
  createStatus(@Body() statusDto: StatusDto): Promise<Status> {
    return this.statusService.create(statusDto);
  }
}
