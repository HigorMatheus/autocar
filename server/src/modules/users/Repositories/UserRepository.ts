import User from '@modules/users/infra/routes/entities/User';
import { uuid } from 'uuidv4';
import IUserRepository from './IUserRepository';

interface IRequestUser {
  name: string;
  email: string;
  password: string;
}
class UserRepository implements IUserRepository {
  private users: User[] = [];

  public CreateUser({ name, email, password }: IRequestUser): User {
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };
    this.users.push(user);
    return user;
  }

  public ListUsers(): User[] {
    return this.users;
  }
}

export default UserRepository;
