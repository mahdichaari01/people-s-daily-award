import { Injectable } from '@nestjs/common';
import { VoteEntity } from './entities/vote.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { NominationEntity } from 'src/nominate/nominate.entity';
import { CreateVoteDto } from './DTO/CreateVoteDto';
import { MoreThanOrEqual } from 'typeorm';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class VoteService {
  constructor(
    @InjectRepository(VoteEntity)
    private readonly VoteRepository: Repository<VoteEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(NominationEntity)
    private readonly nominationRepository: Repository<NominationEntity>,
  ) {}

  /*async create(
    createVoteDto: CreateVoteDto,
    userId: string,
    NominationId: number,
  ): Promise<VoteEntity> {
    const vote = new VoteEntity();
    const user = await this.userRepository.findOneBy({ id: userId });
    const nomination = await this.nominationRepository.findOneBy({ id: NominationId });
    vote.user = user;
    vote.nomination = nomination;
    const savedvote = await this.VoteRepository.save(vote);
    return savedvote;
  }*/
  async nbVoteByNomination() {
    // Créer un queryBuilder

    const qb = this.VoteRepository.createQueryBuilder('vote');
    // Chercher le nombre de vote par nomination
    qb.select('vote.nomination, count(vote.id) as nombreDeVote').groupBy(
      'vote.nomination',
    );
    return await qb.getRawMany();
  }

  async hasUserVotedToday(userId: string): Promise<boolean> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const vote = await this.VoteRepository.findOne({
      where: {
        user: { id: userId },
        createdAt: MoreThanOrEqual(today),
      },
    });

    return !!vote;
  }

  async create(votedata: CreateVoteDto, userId: string): Promise<VoteEntity> {
    const { nominationId } = votedata;
    const vote = new VoteEntity();
    const user = await this.userRepository.findOneBy({ id: userId });
    const hasVotedToday = await this.hasUserVotedToday(userId);

    if (hasVotedToday) {
      throw new BadRequestException('User has already voted today');
    } else {
      const nomination = await this.nominationRepository.findOneBy({
        id: nominationId,
      });
      vote.nomination = nomination;
      vote.user = user;
      const savedVote = await this.VoteRepository.save(vote);

      return savedVote;
    }
  }

  async findAll(): Promise<VoteEntity[]> {
    return await this.VoteRepository.find({ relations: ['nomination'] });
  }

  async find(options?: any): Promise<VoteEntity[]> {
    return await this.VoteRepository.find(options);
  }

  async update(id: string, VoteData: Partial<VoteEntity>): Promise<VoteEntity> {
    await this.VoteRepository.update(id, VoteData);
    return await this.VoteRepository.findOneBy({ id: id });
  }

  async delete(id): Promise<void> {
    await this.VoteRepository.delete(id);
  }
}
