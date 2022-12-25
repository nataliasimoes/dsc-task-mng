import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { TaskExecutionModule } from './tasks-execution/tasks-execution.module';

@Module({
  imports: [TaskModule, TaskExecutionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
