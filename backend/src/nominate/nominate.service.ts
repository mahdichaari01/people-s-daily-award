import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NominationEntity } from './nominate.entity';
import { CreateNominationDto } from './nominate.dto';
import { UserEntity } from '../user/entities/user.entity';
import { MoreThanOrEqual } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
@Injectable()
export class NominationService {
  constructor(
    @InjectRepository(NominationEntity)
    private readonly nominationRepository: Repository<NominationEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async hasUserNominatedToday(userId: string): Promise<boolean> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nominate = await this.nominationRepository.findOne({
      where: {
        user: { id: userId },
        createdAt: MoreThanOrEqual(today),
      },
    });

    return !!nominate;
  }
  async create(
    createNominationDto: CreateNominationDto,
    userId: string,
  ): Promise<NominationEntity> {
    const nomination = new NominationEntity();
    const user = await this.userRepository.findOneBy({ id: userId });
    const hasNominatedToday = await this.hasUserNominatedToday(userId);
    if (hasNominatedToday) {
      throw new BadRequestException('User has already nominated today');
    } else {
      nomination.nomineeName = createNominationDto.nomineeName;
      nomination.reason = createNominationDto.reason;
      nomination.imageLink = createNominationDto.imageLink;
      nomination.user = user;
      const savedNomination = await this.nominationRepository.save(nomination);
      return savedNomination;
    }
  }

  async findAll(): Promise<NominationEntity[]> {
    return await this.nominationRepository.find({ relations: ['user'] });
  }

  async find(options?: any): Promise<NominationEntity[]> {
    return await this.nominationRepository.find(options);
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
