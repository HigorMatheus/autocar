/* eslint-disable @typescript-eslint/no-empty-function */
import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';
import IUserRepository from '../IUsersRepository';

interface IfinAnEmail {
  email: string;
}

class fakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  // constructor(parameters) {}
  async FindAnEmail({ email }: IfinAnEmail): Promise<User | undefined> {
    const userExits = this.users.filter(user => user.email === email);

    const user1 = userExits[0];

    return user1;
  }

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
