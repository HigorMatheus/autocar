import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: ICreateUser): Promise<User> {
    // const userExists = await this.usersRepository.FindAnEmail;

    // if (userExists) {
    //   console.log('err');
    // }

    const user = {
      name,
      email,
      password,
    };

    const userCreated = await this.usersRepository.CreateUser(user);

    return userCreated;
  }
}

export default CreateUserService;
