import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/hashProvider/models/IHashProvide';
import IUsersRepository from '../repositories/IUsersRepository';

interface IAuthenticate {
  email: string;
  password: string;
}
interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IAuthenticate): Promise<IResponse> {
    const user = await this.usersRepository.FindAnEmail(email);

    if (!user) {
      throw new AppError('Incorect email/password combination', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('Incorect email/password combination', 401);
    }

    const { expiresIn, secret } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
