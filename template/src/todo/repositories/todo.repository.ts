import { Repository } from 'typeorm';
import dataSource from '@shared/configs/data-source.config';
import { Todo } from '../entities';

export class TodoRepository extends Repository<Todo> {
  constructor() {
    super(Todo, dataSource.manager);
  }

  public getAllTodos() {
    return this.find();
  }
}
