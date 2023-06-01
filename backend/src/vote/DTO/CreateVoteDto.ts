import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUrl,
  IsNumber,
} from 'class-validator';

export class CreateVoteDto {
  @IsNotEmpty()
  @IsNumber()
  nominationId: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
