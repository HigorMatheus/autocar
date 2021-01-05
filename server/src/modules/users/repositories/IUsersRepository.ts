import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

interface IfinAnEmail {
  email: string;
}
interface IUsersRepository {
  CreateUser(data: ICreateUserDTO): Promise<User>;
  FindAnEmail({ email }: IfinAnEmail): Promise<User | undefined>;
}

export default IUsersRepository;
