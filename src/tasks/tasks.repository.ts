import { Task } from './task.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find((task) => task.id == id);
  }

  createTask(name) {
    const task: Task = {
      id: this.tasks.length + 1,
      name: name,
      description: 'Test task',
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: number, name) {
    const task = this.getTaskById(id);
    task.name = name;
    return task;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex((task) => task.id == id);
    this.tasks.splice(index, 1);
  }
}
