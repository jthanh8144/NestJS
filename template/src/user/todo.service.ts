import { Injectable } from '@nestjs/common';
import { TodoDto } from './dtos';

@Injectable()
export class TodoService {
  create(todo: TodoDto) {
    console.log(todo);
    return {
      message: 'Create sucess',
    };
  }
}
