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
import { NominationEntity } from 'src/nominate/nominate.entity';
import { CreateVoteDto } from './DTO/CreateVoteDto';
import { Request } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Between, Raw } from 'typeorm';
@Controller('vote')
@UseGuards(JwtAuthGuard)
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  /*  @Post()
  async create(
    @Body() createVoteDto: CreateVoteDto,
    @Request() req,
  ): Promise<VoteEntity> {
    const userId = req.user.userId;
    const nominationId = req.user.nominationId;
    return await this.voteService.create(createVoteDto, userId, nominationId);
  } */

  @Post()
  async create(
    @Body() vote: CreateVoteDto,
    @Request() req,
  ): Promise<VoteEntity> {
    const userId = req.user.userId;
    return await this.voteService.create(vote, userId);
  }

  @Get('nombre')
  async nbVoteByNomination() {
    return await this.voteService.nbVoteByNomination();
  }

  @Get()
  async findOne(
    @Query('id') userId?: string,
    @Query('date') createdAt?: string,
  ): Promise<VoteEntity[]> {
    const queryOptions: any = {};
    //queryOptions.relations = ['user']

    if (userId) {
      queryOptions.user = { id: userId };
    }

    if (createdAt) {
      const date = new Date(createdAt);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      queryOptions.createdAt = Between(date, endDate);
    }

    console.log(queryOptions);
    const options = {
      relations: ['user', 'nomination'],
      where: queryOptions,
    };
    return await this.voteService.find(options);
  }

  @Get()
  async findAll(): Promise<VoteEntity[]> {
    return await this.voteService.findAll();
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
