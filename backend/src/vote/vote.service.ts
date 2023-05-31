import { Injectable } from '@nestjs/common';
import { VoteEntity } from './entities/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { NominationEntity } from 'src/nominate/nominate.entity';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private readonly VoteRepository: Repository<VoteEntity>,
    @InjectRepository(NominationEntity)
    private readonly NominationRepository: Repository<NominationEntity>,
  ) {}

  async findAll(): Promise<VoteEntity[]> {
    return await this.VoteRepository.find({ relations: ['Nomination'] });
  }

  async findOne(id: string): Promise<VoteEntity> {
    return await this.VoteRepository.findOneBy({ id: id });
  }

  async update(id: string, VoteData: Partial<VoteEntity>): Promise<VoteEntity> {
    await this.VoteRepository.update(id, VoteData);
    return await this.VoteRepository.findOneBy({ id: id });
  }

  async delete(id): Promise<void> {
    await this.VoteRepository.delete(id);
  }
}
