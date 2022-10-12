import { Body, Controller, Get, Post } from '@nestjs/common';
import { DealDto } from './deals.dto';
import { Deal } from './deals.entity';
import { DealsService } from './deals.service';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealService: DealsService) {}

  @Get()
  getAllDeals(): Promise<Deal[]> {
    return this.dealService.findAll();
  }

  @Post()
  createDeal(@Body() deal: DealDto): Promise<Deal> {
    return this.dealService.create(deal);
  }
}
