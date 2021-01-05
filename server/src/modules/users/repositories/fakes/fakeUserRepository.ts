import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';
import IUserRepository from '../IUsersRepository';

class fakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  // constructor(parameters) {}
  FindAnEmail() {}

  async CreateUser({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user: User = {
      id: uuid(),
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.users.push(user);

    return user;
  }
}

export default fakeUsersRepository;
