import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/hashProvider/fakes/FakeHashProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUsersService';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUsers: CreateUserService;
let showProfile: ShowProfileService;
describe('Update Profile Services', (): void => {
  beforeEach((): void => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    showProfile = new ShowProfileService(fakeUsersRepository);
    createUsers = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to update the Profile', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johnddoe@example.com',
      password: '123456',
    });
    const userExists = await showProfile.execute({
      user_id: user.id,
    });

    expect(userExists.id).toEqual(user.id);
  });

  it('should be able to Profile user not fald ', async () => {
    await createUsers.execute({
      name: 'John Doe',
      email: 'johnddoe@example.com',
      password: '123456',
    });
    await expect(
      showProfile.execute({
        user_id: 'hahahhahahahhahhahah',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
