import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { DealDto } from './dto/deals.dto';
import { Deal } from './deals.entity';
import { SetStatusForDealDto } from './dto/setStatusForDeal.dto';
import { StatusesService } from '../statuses/statuses.service';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal) private dealRepository: Repository<Deal>,
    private readonly userService: UsersService,
    private readonly statusService: StatusesService,
  ) {}

  public async create(dealDto: DealDto): Promise<Deal> {
    const user = await this.userService.findById(dealDto.userId);
    const deal = { ...new Deal(), ...dealDto };
    deal.user = user;
    return this.dealRepository.save(deal);
  }

  public async setStatus(setStatusDto: SetStatusForDealDto): Promise<Deal> {
    const status = await this.statusService.findById(setStatusDto.statusId);
    const deal = await this.findById(setStatusDto.dealId);
    deal.status = status;
    return this.dealRepository.save(deal);
  }

  public findAll(): Promise<Deal[]> {
    return this.dealRepository.find({
      relations: {
        user: true,
        status: true,
      },
    });
  }

  public findById(id: string): Promise<Deal> {
    return this.dealRepository.findOne({ where: { id } });
  }

  public remove(id: string): Promise<DeleteResult> {
    return this.dealRepository.delete(id);
  }
}
