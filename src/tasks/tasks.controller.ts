import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body('name') name) {
    return this.tasksService.createTask(name);
  }

  @Patch('/:id')
  updateTask(@Param('id') id: string, @Body('name') name) {
    return this.tasksService.updateTask(id, name);
  }
}
