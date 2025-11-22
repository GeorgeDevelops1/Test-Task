import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';
import { SignDto } from './dto/sign.dto';
import { DecodeDto } from './dto/decode.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) {}

  @Post('sign')
  async sign(@Body() signDto: SignDto) {
    try {
      const result = await this.jwtService.sign(signDto.userData);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'სერვერის შეცდომა',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('decode')
  async decode(@Body() decodeDto: DecodeDto) {
    try {
      const result = await this.jwtService.decode(decodeDto.token);
      return result;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'სერვერის შეცდომა',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

