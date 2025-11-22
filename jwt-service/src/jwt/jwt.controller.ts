import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtService } from './jwt.service';
import { SignDto } from './dto/sign.dto';
import { DecodeDto } from './dto/decode.dto';

@Controller()
export class JwtController {
  constructor(private readonly jwtService: JwtService) {}

  @MessagePattern({ cmd: 'jwt.sign' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async sign(@Payload() signDto: SignDto) {
    return this.jwtService.sign(signDto.userData);
  }

  @MessagePattern({ cmd: 'jwt.decode' })
  @UsePipes(new ValidationPipe({ transform: true }))
  async decode(@Payload() decodeDto: DecodeDto) {
    return this.jwtService.decode(decodeDto.token);
  }
}

