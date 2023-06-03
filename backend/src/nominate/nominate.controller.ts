import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { NominationService } from './nominate.service';
import { NominationEntity } from './nominate.entity';
import { CreateNominationDto } from './nominate.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { Between, Raw } from 'typeorm';
@Controller('nominations')
@UseGuards(JwtAuthGuard)
export class NominationController {
  constructor(private readonly nominationService: NominationService) {}

  @Post()
  async create(
    @Body() createNominationDto: CreateNominationDto,
    @Request() req,
  ): Promise<NominationEntity> {
    const userId = req.user.userId;
    return await this.nominationService.create(createNominationDto, userId);
  }

  @Get()
  async findOne(
    @Query('id') userId?: string,
    @Query('date') createdAt?: string,
  ): Promise<NominationEntity[]> {
    const queryOptions: any = {};

    if (userId) {
      queryOptions.user = { id: userId };
    }

    if (createdAt) {
      const date = new Date(createdAt);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      queryOptions.createdAt = Between(date, endDate);
    }
    if (!userId && !createdAt) {
      // declate variable today with current date only (without time)
      const date = new Date();
      date.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
      queryOptions.createdAt = Between(date, endDate);
    }
    console.log(queryOptions);
    const options = {
      relations: ['user'],
      where: queryOptions,
    };
    return await this.nominationService.find(options);
  }
  @Get()
  async findAll(): Promise<NominationEntity[]> {
    return await this.nominationService.findAll();
  }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() nominationData: Partial<NominationEntity>,
  ): Promise<NominationEntity> {
    return await this.nominationService.update(id, nominationData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.nominationService.delete(id);
  }
}
