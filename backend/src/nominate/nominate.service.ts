import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NominationEntity } from './nominate.entity';
import { CreateNominationDto } from './nominate.dto';
import { UserEntity } from '../user/entities/user.entity';

@Injectable()
export class NominationService {
  constructor(
    @InjectRepository(NominationEntity)
    private readonly nominationRepository: Repository<NominationEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(
    createNominationDto: CreateNominationDto,
    userId: string,
  ): Promise<NominationEntity> {
    const nomination = new NominationEntity();
    const user = await this.userRepository.findOneBy({ id: userId });
    nomination.nomineeName = createNominationDto.nomineeName;
    nomination.reason = createNominationDto.reason;
    nomination.imageLink = createNominationDto.imageLink;
    nomination.user = user;
    const savedNomination = await this.nominationRepository.save(nomination);
    return savedNomination;
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
