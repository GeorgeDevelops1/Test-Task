import { Module } from '@nestjs/common';
import { JwtModule } from './jwt/jwt.module';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [JwtModule],
  controllers: [AuthController],
})
export class AppModule {}

