// import AppError from '@shared/errors/AppError';
// import User from '../infra/typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/hashProvider/fakes/FakeHashProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUsersService';
import UpdateUserService from './UpdateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUsers: CreateUserService;
let updateUser: UpdateUserService;
describe('UpdateUsersServices', (): void => {
  beforeEach((): void => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateUser = new UpdateUserService(fakeUsersRepository, fakeHashProvider);
    createUsers = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to update a new user', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });
    const userUpdate = {
      ...user,
      user_id: user.id,
      email: 'johndtre@example.com',
    };
    const user2 = await updateUser.execute(userUpdate);

    expect(user2.email).toEqual('johndtre@example.com');
  });
});
