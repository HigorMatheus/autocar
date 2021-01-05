import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

interface IfinAnEmail {
  email: string;
}

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async FindAnEmail({ email }: IfinAnEmail): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(email);

    return user;
  }

  public async CreateUser(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
