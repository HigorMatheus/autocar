import { CreateUserDTO } from '@modules/users/dtos/CreateUserDTO';
import User from '@modules/users/infra/routes/entities/User';

export default interface IUserRepository {
  CreateUser(data: CreateUserDTO): User;
  ListUsers(): User[];
}
