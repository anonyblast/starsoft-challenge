import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ClientKafka, Transport, ClientsModule } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly kafkaClient: ClientKafka) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('user_created');
    this.kafkaClient.subscribeToResponseOf('user_updated');
    await this.kafkaClient.connect();
  }

  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  async handleUserCreated(message: any) {
    console.log('User Created:', message);
  }

  async handleUserUpdated(message: any) {
    console.log('User Updated:', message);
  }
}
