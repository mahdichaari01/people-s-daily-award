import { Injectable } from '@nestjs/common';
import { VoteEntity } from './entities/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { NominationEntity } from 'src/nominate/nominate.entity';
import { CreateVoteDto } from './DTO/CreateVoteDto';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private readonly VoteRepository: Repository<VoteEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(NominationEntity)
    private readonly NominationRepository: Repository<NominationEntity>,
  ) {}

  async create(
    createVoteDto: CreateVoteDto,
    userId: string,
    nominationId: number,
  ): Promise<VoteEntity> {
    const vote = new VoteEntity();
    const user = await this.userRepository.findOneBy({ id: userId });
    const nomination = await this.NominationRepository.findOneBy({
      id: nominationId,
    });
    vote.user = user;
    vote.nomination = nomination;
    const savedVote = await this.VoteRepository.save(vote);
    return savedVote;
  }
  async findAll(): Promise<VoteEntity[]> {
    return await this.VoteRepository.find({ relations: ['nomination'] });
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
