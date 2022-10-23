import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { DealsModule } from '../deals/deals.module';
import { Deal } from '../deals/deals.entity';
import { StatusesModule } from '../statuses/statuses.module';
import { Status } from '../statuses/statuses.entity';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    UsersModule,
    DealsModule,
    StatusesModule,
    ConfigModule.forRoot({ envFilePath: 'dev.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Deal, Status],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([User, Deal, Status]),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
