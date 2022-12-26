import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body('name') name) {
    return this.tasksService.createTask(name);
  }

  @Patch('/:id')
  updateTask(@Param('id') id: number, @Body('name') name) {
    return this.tasksService.updateTask(id, name);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    this.tasksService.deleteTask(id);
    return `Task with id ${id} deleted`;
  }
}
