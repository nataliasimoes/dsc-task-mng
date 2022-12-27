import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { username, password } = createUserDTO;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    let user = this.create({
      username: username,
      password: hashedPassword,
    });
    return this.save(user);
  }
}
