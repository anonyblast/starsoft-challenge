import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly kafkaClient: ClientKafka) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  async onModuleDestroy() {
    await this.kafkaClient.close();
  }

  async produceUserCreatedEvent(user: any) {
    await this.kafkaClient.emit('user_created', user);
  }

  async produceUserUpdatedEvent(user: any) {
    await this.kafkaClient.emit('user_updated', user);
  }
}
