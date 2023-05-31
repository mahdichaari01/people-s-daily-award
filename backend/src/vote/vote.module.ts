import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { VoteEntity } from './entities/vote.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [VoteService],
  controllers: [VoteController],
  imports: [TypeOrmModule.forFeature([VoteEntity])],
})
export class VoteModule {}
