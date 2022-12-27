import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDTO } from './dto/create-task.dto';
import { updateTaskDTO } from './dto/update-task.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Body() id: number) {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDTO: createTaskDTO) {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Patch('/:id')
  updateTask(@Body() updateTaskDTO: updateTaskDTO, @Param('id') id: number) {
    return this.tasksService.updateTask(updateTaskDTO, id);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    this.tasksService.deleteTask(id);
    return `Task with id ${id} deleted`;
  }
}
