import { IsNotEmpty } from 'class-validator';
export class updateTaskDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
}
