import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';

import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { NominationEntity } from './nominate/nominate.entity';
import { NominationModule } from './nominate/nominate.module';
import { VoteModule } from './vote/vote.module';
import { VoteEntity } from './vote/entities/vote.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'peoplesdailyaward',
        entities: [UserEntity, NominationEntity, VoteEntity],
        synchronize: true,
      }),
      inject: [],
    }),
    CommonModule,
    UserModule,
    NominationModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
