import { Task } from './task.entity';
import { Repository, EntityRepository } from 'typeorm';
import { createTaskDTO } from './dto/create-task.dto';
import { updateTaskDTO } from './dto/update-task.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  getAllTasks() {
    return this.createQueryBuilder('task').getMany();
    // return this.tasks;
  }

  getTaskById(id: number): Promise<Task> {
    return this.findOne(id);
    //return this.tasks.find((task) => task.id == id);
  }

  createTask(createTaskDTO: createTaskDTO) {
    const { name, description } = createTaskDTO;
    let task = this.create({
      name: name,
      description: description,
    });

    return this.save(task);
    // const { name, description } = createTaskDTO;
    // const task: Task = {
    //   id: this.tasks.length + 1,
    //   name: name,
    //   description: description,
    // };

    // this.tasks.push(task);
    // return task;
  }

  async updateTask(updateTaskDTO: updateTaskDTO, id: number) {
    const { name, description } = updateTaskDTO;
    let task = await this.getTaskById(id);

    task.name = name;
    task.description = description;

    return this.save(task);
    // const task = this.getTaskById(id);
    // task.name = name;
    // return task;
  }

  deleteTask(id: number) {
    this.delete(id);
    // const index = this.tasks.findIndex((task) => task.id == id);
    // this.tasks.splice(index, 1);
  }
}
