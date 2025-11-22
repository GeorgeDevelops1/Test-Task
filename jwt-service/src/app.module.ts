import { Module } from '@nestjs/common';
import { JwtController } from './jwt/jwt.controller';
import { JwtService } from './jwt/jwt.service';

@Module({
  imports: [],
  controllers: [JwtController],
  providers: [JwtService],
})
export class AppModule {}

