import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'mohanad', text: 'gi all ' }];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto) {
    const message = { ...createMessageDto };
    this.messages.push(message);
    return message;
  }

  findAll() {
    return this.messages;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(clientId) {
    return this.clientToUser[clientId];
  }
}
