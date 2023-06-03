import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateNominationDto {
  @IsNotEmpty()
  @IsString()
  nomineeName: string;

  @IsString()
  reason?: string;

  @IsUrl()
  imageLink?: string;

  @IsString()
  embed?: string;
}
