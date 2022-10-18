import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  public async create(userDto: UserDto): Promise<User> {
    const user: User = { ...new User(), ...userDto };
    const createdUser = await this.userRepository.save(user);
    return createdUser;
  }

  public findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: {
        deals: true,
      },
    });
  }

  public findById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
      relations: {
        deals: true,
      },
    });
  }

  public findByTelephone(telephone: string): Promise<User> {
    return this.userRepository.findOne({ where: { telephone } });
  }

  public remove(telephone: string): Promise<DeleteResult> {
    return this.userRepository.delete(telephone);
  }
}
