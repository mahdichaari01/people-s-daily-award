import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { VoteEntity } from './entities/vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NominationEntity } from 'src/nominate/nominate.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  providers: [VoteService],
  controllers: [VoteController],
  imports: [
    TypeOrmModule.forFeature([VoteEntity, UserEntity, NominationEntity]),
  ],
})
export class VoteModule {}
