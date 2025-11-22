import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class JwtService implements OnModuleInit {
  constructor(@Inject('JWT_SERVICE') private client: ClientProxy) {}

  async onModuleInit() {
    await this.client.connect();
  }

  async sign(userData: Record<string, any>): Promise<{ token: string }> {
    try {
      const result = await firstValueFrom(
        this.client.send({ cmd: 'jwt.sign' }, { userData }),
      );
      return result;
    } catch (error) {
      if (error.message?.includes('timeout')) {
        throw new Error('სერვისთან კავშირის დრო ამოიწურა');
      }
      throw new Error(`JWT sign შეცდომა: ${error.message}`);
    }
  }

  async decode(token: string): Promise<{ valid: boolean; user?: Record<string, any>; error?: string }> {
    try {
      const result = await firstValueFrom(
        this.client.send({ cmd: 'jwt.decode' }, { token }),
      );
      return result;
    } catch (error) {
      if (error.message?.includes('timeout')) {
        throw new Error('სერვისთან კავშირის დრო ამოიწურა');
      }
      throw new Error(`JWT decode შეცდომა: ${error.message}`);
    }
  }
}
