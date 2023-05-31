import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth';
import { VoteService } from './vote.service';
import { VoteEntity } from './entities/vote.entity';

@Controller('vote')
@UseGuards(JwtAuthGuard)
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get()
  async findAll(): Promise<VoteEntity[]> {
    return await this.voteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VoteEntity> {
    return await this.voteService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() voteData: Partial<VoteEntity>,
  ): Promise<VoteEntity> {
    return await this.voteService.update(id, voteData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.voteService.delete(id);
  }
}
