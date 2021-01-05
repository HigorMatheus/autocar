import User from '../entities/User';
import UserRepository from '../repositories/userRepository';

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  constructor(private userRepository = new UserRepository()) {}

  public async execute({ name, email, password }: ICreateUser): Promise<User> {
    const userExists = this.userRepository.findAnEmail({ email });

    if (userExists) {
      // eslint-disable-next-line no-console
      console.log('err');
    }

    const user = {
      name,
      email,
      password,
    };

    const userCreated = await this.userRepository.createUser(user);

    return userCreated;
  }
}

export default CreateUserService;
