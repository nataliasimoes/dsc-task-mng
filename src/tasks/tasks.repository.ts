import { Task } from './task.entity';
import { Repository, EntityRepository } from 'typeorm';
import { createTaskDTO } from './dto/create-task.dto';
import { updateTaskDTO } from './dto/update-task.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  getAllTasks() {
    return this.createQueryBuilder('task').getMany();
  }

  getTaskById(id: number): Promise<Task> {
    return this.findOne(id);
  }

  createTask(createTaskDTO: createTaskDTO) {
    const { name, description } = createTaskDTO;
    let task = this.create({
      name: name,
      description: description,
    });

    return this.save(task);
  }

  async updateTask(updateTaskDTO: updateTaskDTO, id: number) {
    const { name, description } = updateTaskDTO;
    let task = await this.getTaskById(id);

    if (!task) throw new NotFoundException();

    task.name = name;
    task.description = description;

    return this.save(task);
  }

  deleteTask(id: number) {
    this.delete(id);
  }
}
