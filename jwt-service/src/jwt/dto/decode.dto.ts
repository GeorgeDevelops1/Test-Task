import { IsNotEmpty, IsString } from 'class-validator';

export class DecodeDto {
  @IsNotEmpty()
  @IsString()
  token: string;
}

