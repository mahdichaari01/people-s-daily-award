import { IsNotEmpty, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateNominationDto {
  @IsNotEmpty()
  @IsString()
  nomineeName: string;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsUrl()
  imageLink?: string;
}
