import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks() {
    return 'This action returns all tasks';
  }

  getTaskById(id: string) {
    return `This action returns a task with id ${id}`;
  }

  createTask(name) {
    return 'Creating a new task with name: ' + name;
  }

  updateTask(id: string, name) {
    return `Updating a task with id ${id} and name ${name}`;
  }
}
