import { IsNotEmpty, IsString } from 'class-validator';

export class DecodeDto {
  @IsNotEmpty({ message: 'token აუცილებელია' })
  @IsString({ message: 'token უნდა იყოს სტრინგი' })
  token: string;
}

