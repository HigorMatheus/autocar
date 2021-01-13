import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/hashProvider/fakes/FakeHashProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUsersService';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUsers: CreateUserService;
let updateProfile: UpdateProfileService;
describe('Update Profile Services', (): void => {
  beforeEach((): void => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    createUsers = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to update the Profile', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johnddoe@example.com',
      password: '123456',
    });
    const userUpdate = await updateProfile.execute({
      user_id: user.id,
      email: 'johnddue@example.com',
      name: 'Johon Trê',
    });

    expect(userUpdate.email).toEqual('johnddue@example.com');
    expect(userUpdate.name).toEqual('Johon Trê');
  });

  it('must return one error when the user ID is not registered', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        ...user,
        user_id: '1234',
        email: 'johndtre@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('not update E-mail already registered ', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });
    await createUsers.execute({
      name: 'John Doe',
      email: 'johntry@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'johntry@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('old password required to change password', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johnddoe@example.com',
      password: '123456',
    });
    await expect(
      updateProfile.execute({
        user_id: user.id,
        email: 'johnddue@example.com',
        name: 'Johon Trê',
        password: 'nova senha',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('old password does not match to change password', async () => {
    const user = await createUsers.execute({
      name: 'John Doe',
      email: 'johnddoe@example.com',
      password: '123456',
    });
    await expect(
      updateProfile.execute({
        user_id: user.id,
        email: 'johnddue@example.com',
        name: 'Johon Trê',
        old_password: 'senha errada',
        password: 'nova senha',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should de able to update the password', async () => {
    const user = await fakeUsersRepository.CreateUser({
      name: 'John Due',
      email: 'jondue@exemple.com',
      password: '1233456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'Johon Trê',
      email: 'jontre@exemple.com',
      old_password: '1233456',
      password: '102030',
    });

    expect(updatedUser.password).toBe('102030');
  });
});
