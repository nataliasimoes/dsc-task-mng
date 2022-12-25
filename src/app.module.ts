import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksExecutionModule } from './tasks-execution/tasks-execution.module';

@Module({
  imports: [TasksModule, TasksExecutionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
