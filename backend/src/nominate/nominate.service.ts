import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NominationEntity } from './nominate.entity';
import { CreateNominationDto } from './nominate.dto';
import { UserEntity } from '../user/entities/user.entity';
import { MoreThanOrEqual } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { VoteService } from '../vote/vote.service';
@Injectable()
export class NominationService implements OnModuleInit {
  constructor(
    @InjectRepository(NominationEntity)
    private readonly nominationRepository: Repository<NominationEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private voteService: VoteService,
  ) {}

  onModuleInit() {
    this.scheduleNotificationJob();
  }

  async findMostVotedNominee(): Promise<NominationEntity> {
    const votesPerNominee = await this.voteService.nbVoteByNomination();
    const maxVoteItem = votesPerNominee.reduce((prev, current) => {
      const prevVote = parseInt(prev.nombreDeVote);
      const currentVote = parseInt(current.nombreDeVote);

      if (currentVote > prevVote) {
        return current;
      } else {
        return prev;
      }
    });

    const maxNominationId = maxVoteItem.nominationId;
    const maxNomination = await this.nominationRepository.findOne({
      where: { id: maxNominationId },
    });

    return maxNomination;
  }

  @Cron('0 0 0 * * *', {
    name: 'notifications',
  })
  async scheduleNotificationJob() {
    try {
      // Get the most voted nominee
      const mostVotedNominee = await this.findMostVotedNominee();

      const notificationMessage = `Congratulations to the winner: ${mostVotedNominee.nomineeName}!
        What he did: ${mostVotedNominee.reason}`;
      await this.sendWinnerNotification(notificationMessage);

      console.log('Winner notifications sent successfully.');
    } catch (error) {
      console.error('Failed to send winner notifications:', error);
    }
  }

  private async sendWinnerNotification(message: string): Promise<void> {
    console.log('Sending notification:', message);
  }

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
