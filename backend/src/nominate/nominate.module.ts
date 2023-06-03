import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NominationEntity } from './nominate.entity';
import { NominationService } from './nominate.service';
import { NominationController } from './nominate.controller';
import { UserEntity } from 'src/user/entities/user.entity';
import { VoteService } from 'src/vote/vote.service';
import { VoteEntity } from 'src/vote/entities/vote.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NominationEntity, UserEntity, VoteEntity]),
  ],
  providers: [NominationService, VoteService],
  controllers: [NominationController],
})
export class NominationModule {}
