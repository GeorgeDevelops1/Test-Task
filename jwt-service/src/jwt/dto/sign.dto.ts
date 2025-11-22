import { IsNotEmpty, IsObject } from 'class-validator';

export class SignDto {
  @IsNotEmpty()
  @IsObject()
  userData: Record<string, any>;
}

