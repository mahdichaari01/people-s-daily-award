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
  async findAll(): Promise<NominationEntity[]> {
    return await this.nominationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<NominationEntity> {
    return await this.nominationService.findOne(id);
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
