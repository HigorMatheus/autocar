import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IShowUser {
  user_id: string;
}

class ShowProfileService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ user_id }: IShowUser): Promise<User> {
    const user = await this.usersRepository.FindAnId(user_id);

    if (!user) {
      throw new AppError('user not fald ', 404);
    }
    return user;
  }
}

export default ShowProfileService;
