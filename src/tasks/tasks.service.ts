import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  getAllTasks() {
    return this.tasksRepository.getAllTasks();
  }

  getTaskById(id: number) {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(name) {
    return this.tasksRepository.createTask(name);
  }

  updateTask(id: number, name) {
    return this.tasksRepository.updateTask(id, name);
  }

  deleteTask(id: number) {
    return this.tasksRepository.deleteTask(id);
  }
}
