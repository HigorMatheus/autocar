import AppError from '@shared/errors/AppError';
import { inject } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/hashProvider/models/IHashProvide';
import IUsersRepository from '../repositories/IUsersRepository';

interface IUpdateUserRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  /**
   * execute
   */
  public async execute({
    user_id,
    name,
    email,
    old_password,
    password,
  }: IUpdateUserRequest): Promise<User> {
    const id = user_id;
    const userExists = await this.usersRepository.FindAnId(id);

    if (!userExists) {
      throw new AppError('user invalid');
    }

    const user = {
      ...userExists,
      name,
      email,
      password: password || userExists.password,
    };

    return this.usersRepository.save(user);
  }
}

export default UpdateUserService;
