import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/users/users.entity';
import { DealsModule } from './modules/deals/deals.module';
import { Deal } from './modules/deals/deals.entity';
import { StatusesModule } from './modules/statuses/statuses.module';
import { Status } from './modules/statuses/statuses.entity';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
