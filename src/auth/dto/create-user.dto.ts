import { isString, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDTO {
  @MinLength(4)
  @MaxLength(20)
  username: string;
  @MaxLength(20)
  @MinLength(4)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {})
  password: string;
}
