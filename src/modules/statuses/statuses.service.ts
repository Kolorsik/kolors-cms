import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusDto } from './dto/statuses.dto';
import { Status } from './statuses.entity';

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(Status) private statusRepository: Repository<Status>,
  ) {}

  public async create(statusDto: StatusDto): Promise<Status> {
    const status = { ...new Status(), ...statusDto };
    return await this.statusRepository.save(status);
  }

  public findById(id: string): Promise<Status> {
    return this.statusRepository.findOne({ where: { id } });
  }

  public findAll(): Promise<Status[]> {
    return this.statusRepository.find();
  }
}
