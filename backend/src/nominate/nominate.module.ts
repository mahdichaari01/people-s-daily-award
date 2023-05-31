import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NominationEntity } from './nominate.entity';
import { NominationService } from './nominate.service';
import { NominationController } from './nominate.controller';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NominationEntity, UserEntity])],
  providers: [NominationService],
  controllers: [NominationController],
})
export class NominationModule {}
