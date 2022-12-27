import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { createTaskDTO } from './dto/create-task.dto';
import { updateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  getAllTasks() {
    return this.tasksRepository.getAllTasks();
  }

  getTaskById(id: number) {
    return this.tasksRepository.getTaskById(id);
  }

  createTask(createTaskDTO) {
    return this.tasksRepository.createTask(createTaskDTO);
  }

  updateTask(updateTaskDTO: updateTaskDTO, id: number) {
    return this.tasksRepository.updateTask(updateTaskDTO, id);
  }

  deleteTask(id: number) {
    return this.tasksRepository.deleteTask(id);
  }
}
