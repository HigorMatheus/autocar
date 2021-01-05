import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository } from 'typeorm';
import User from '../entities/User';

interface IfinAnEmail {
  email: string;
}

class UsersRepository implements IUserRepository {
  constructor(private userRepository = getRepository(User)) {}

  public async FindAnEmail({ email }: IfinAnEmail): Promise<User | undefined> {
    const user = await this.userRepository.findOne(email);

    return user;
  }

  public async CreateUser(data: ICreateUserDTO): Promise<User> {
    const user = this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }
}

export default UsersRepository;
