import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NominationEntity } from './nominate.entity';
import { NominationService } from './nominate.service';
import { NominationController } from './nominate.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NominationEntity])],
  providers: [NominationService],
  controllers: [NominationController],
})
export class NominationModule {}
