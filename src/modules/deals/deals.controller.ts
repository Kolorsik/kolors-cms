import { Body, Controller, Get, Post } from '@nestjs/common';
import { DealDto } from './dto/deals.dto';
import { Deal } from './deals.entity';
import { DealsService } from './deals.service';
import { SetStatusForDealDto } from './dto/setStatusForDeal.dto';

@Controller('api/deals')
export class DealsController {
  constructor(private readonly dealService: DealsService) {}

  @Get('/')
  getAllDeals(): Promise<Deal[]> {
    return this.dealService.findAll();
  }

  @Post('/')
  createDeal(@Body() deal: DealDto): Promise<Deal> {
    return this.dealService.create(deal);
  }

  @Post('/setstatus')
  setStatus(@Body() setStatusDto: SetStatusForDealDto): Promise<Deal> {
    return this.dealService.setStatus(setStatusDto);
  }
}
