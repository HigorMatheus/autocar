import FakeUsersRepository from '../repositories/fakes/fakeUserRepository';
import CreateUserService from './createUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
describe('createuser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });
    expect(user).toHaveProperty('id');
  });
});
