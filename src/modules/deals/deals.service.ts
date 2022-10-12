import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { DealDto } from './dto/deals.dto';
import { Deal } from './deals.entity';

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal) private dealRepository: Repository<Deal>,
    private readonly userService: UsersService,
  ) {}

  public async create(dealDto: DealDto): Promise<Deal> {
    const user = await this.userService.findById(dealDto.userId);
    const deal = { ...new Deal(), ...dealDto };
    deal.user = user;
    const createdDeal = await this.dealRepository.save(deal);
    return createdDeal;
  }

  public findAll(): Promise<Deal[]> {
    return this.dealRepository.find({
      relations: {
        user: true,
      },
    });
  }

  public remove(id: string): Promise<DeleteResult> {
    return this.dealRepository.delete(id);
  }
}
