import { IsNotEmpty, IsObject } from 'class-validator';

export class SignDto {
  @IsNotEmpty({ message: 'userData აუცილებელია' })
  @IsObject({ message: 'userData უნდა იყოს ობიექტი' })
  userData: Record<string, any>;
}

