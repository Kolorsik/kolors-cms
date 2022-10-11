import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(userDto: UserDto): Promise<User> {
    const createdUser = await this.userRepository.save(userDto);
    return createdUser;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findByTelephone(telephone: string): Promise<User> {
    return this.userRepository.findOneBy({ telephone });
  }

  remove(telephone: string): Promise<DeleteResult> {
    return this.userRepository.delete(telephone);
  }
}
