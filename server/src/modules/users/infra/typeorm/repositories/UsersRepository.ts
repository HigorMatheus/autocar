import { ICreateUserDTO } from '@modules/users/dtos/IUsersDTO';
import IUserRepository from '@modules/users/repositories/IUsersRepository';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async FindAnId(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user;
  }

  public async FindAnEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async CreateUser(data: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(data);

    return user;
  }

  public async save(user: User): Promise<User> {
    const usersave = await this.ormRepository.save(user);
    return usersave;
  }
}

export default UsersRepository;
