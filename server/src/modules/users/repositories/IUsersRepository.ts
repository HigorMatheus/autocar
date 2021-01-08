import { ICreateUserDTO } from '../dtos/IUsersDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  CreateUser(data: ICreateUserDTO): Promise<User>;
  FindAnEmail(email: string): Promise<User | undefined>;
  FindAnId(id: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
