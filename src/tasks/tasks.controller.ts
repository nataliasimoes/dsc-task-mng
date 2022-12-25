import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks() {
    return 'This action returns all tasks';
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return `This action returns a task with id ${id}`;
  }

  @Post()
  createTask(@Body('name') name) {
    return 'Creating a new task with name: ' + name;
  }

  @Patch('/:id')
  updateTask(@Param('id') id: string, @Body('name') name) {
    return `Updating a task with id ${id} and name ${name}`;
  }
}
