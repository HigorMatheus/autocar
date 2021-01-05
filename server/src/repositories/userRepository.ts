import { getRepository } from 'typeorm';
import User from '../entities/User';

interface IfinAnEmail {
  email: string;
}
interface IcreateUser {
  name: string;
  email: string;
  password: string;
}
class UserRepository {
  constructor(private userRepository = getRepository(User)) {}

  public async findAnEmail({ email }: IfinAnEmail): Promise<User | undefined> {
    const user = await this.userRepository.findOne(email);

    return user;
  }

  public async createUser(data: IcreateUser): Promise<User> {
    const user = this.userRepository.create(data);

    await this.userRepository.save(user);

    return user;
  }
}

export default UserRepository;
