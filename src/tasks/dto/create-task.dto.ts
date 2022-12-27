import { IsNotEmpty } from 'class-validator';

export class createTaskDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  priority: string;
}
