import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'JWT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://admin:admin@localhost:5672'],
          queue: 'jwt_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}

