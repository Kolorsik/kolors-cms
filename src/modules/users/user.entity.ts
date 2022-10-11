import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'integer' })
  telephone: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  age: number;

  // @CreateDateColumn({ type: 'timestamp' })
  // createdAt: Date;
}
