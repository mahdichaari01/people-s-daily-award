//this script is responsible for seeding the database with data
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService } from './user/user.service';
import { VoteService } from './vote/vote.service';
import { NominationService } from './nominate/nominate.service';
import { UserEntity } from './user/entities/user.entity';
import { randEmail, randFullName, randNumber, randText } from '@ngneat/falso';
import { NominationEntity } from './nominate/nominate.entity';
const DEFAULT_EMBED = `<iframe width="560" height="315" src="https://www.youtube.com/embed/O9UByLyOjBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

export async function seedbootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);
  const voteService = app.get(VoteService);
  const nominationService = app.get(NominationService);

  //first we create 100 users
  for (let i = 0; i < 100; i++) {
    const user = new UserEntity();
    user.email = randEmail();
    user.name = randFullName();
    user.imageLink = 'https://baconmockup.com/300/200/';
    user.password = 'abcdEFGH1234';
    await userService.create(user);
  }
  const usersIds = (await userService.findAll()).map((user) => user.id);

  //then we create 100 nominations
  for (let i = 0; i < 100; i++) {
    const nomination = new NominationEntity();
    nomination.nomineeName = randFullName();
    nomination.reason = randText({ charCount: 600 });
    nomination.embed = DEFAULT_EMBED;
    nomination.imageLink = 'https://baconmockup.com/300/200/';
    await nominationService.create(nomination, usersIds[i]);
  }

  //then we create 200 votes
  for (let i = 0; i < 100; i++) {
    await voteService.create({ nominationId: i }, usersIds[i]);
  }
}
