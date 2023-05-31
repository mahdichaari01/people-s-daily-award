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
@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mariadb',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'peoplesdailyaward',
        entities: [UserEntity, NominationEntity],
        synchronize: true,
      }),
      inject: [],
    }),
    CommonModule,
    UserModule,
    NominationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
