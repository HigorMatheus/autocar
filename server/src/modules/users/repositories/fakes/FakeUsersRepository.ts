import { ICreateUserDTO } from '@modules/users/dtos/IUsersDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';
import IUserRepository from '../IUsersRepository';

class FakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  async FindAnId(id: string): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.id === id);

    const user1 = this.users[userIndex];

    return user1;
  }

  async FindAnEmail(email: string): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.email === email);

    const user1 = this.users[userIndex];

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

  async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex(userfind => userfind.id === user.id);

    this.users[userIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
