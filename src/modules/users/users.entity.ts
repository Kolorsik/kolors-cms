import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Deal } from '../deals/deals.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  telephone: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'integer' })
  age: number;

  @OneToMany(() => Deal, (deal) => deal.user)
  deals: Deal[];

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;
}
