import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NominationEntity } from './nominate.entity';
import { CreateNominationDto } from './nominate.dto';
@Injectable()
export class NominationService {
  constructor(
    @InjectRepository(NominationEntity)
    private readonly nominationRepository: Repository<NominationEntity>,
  ) {}

  async create(
    createNominationDto: CreateNominationDto,
  ): Promise<NominationEntity> {
    const nomination = new NominationEntity();
    nomination.nomineeName = createNominationDto.nomineeName;
    nomination.reason = createNominationDto.reason;
    nomination.imageLink = createNominationDto.imageLink;
    return await this.nominationRepository.save(nomination);
  }

  async findAll(): Promise<NominationEntity[]> {
    return await this.nominationRepository.find();
  }

  async findOne(id: number): Promise<NominationEntity> {
    return await this.nominationRepository.findOneBy({ id: id });
  }

  async update(
    id: number,
    nominationData: Partial<NominationEntity>,
  ): Promise<NominationEntity> {
    await this.nominationRepository.update(id, nominationData);
    return await this.nominationRepository.findOneBy({ id: id });
  }

  async delete(id: number): Promise<void> {
    await this.nominationRepository.delete(id);
  }
}
