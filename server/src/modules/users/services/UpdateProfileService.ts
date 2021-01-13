import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
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
@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    old_password,
    password,
  }: IUpdateUserRequest): Promise<User> {
    const id = user_id;
    const user = await this.usersRepository.FindAnId(id);

    if (!user) {
      throw new AppError('user invalid');
    }

    const userEmail = await this.usersRepository.FindAnEmail(email);

    if (userEmail && userEmail.id !== user_id) {
      throw new AppError(' E-mail already registered');
    }
    if (password && !old_password) {
      throw new AppError(
        'You need to inform the old password to set a new password.',
      );
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.email = email;
    user.name = name;

    await this.usersRepository.save(user);
    return user;
  }
}

export default UpdateProfileService;
