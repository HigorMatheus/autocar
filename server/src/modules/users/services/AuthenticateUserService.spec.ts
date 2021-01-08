import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/hashProvider/fakes/FakeHashProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import AuthenticateUserService from './AuthenticateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let autentcateUsers: AuthenticateUserService;

describe('AutentcateUsers', (): void => {
  beforeEach(async () => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    autentcateUsers = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    await fakeUsersRepository.CreateUser({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'senha',
    });
  });

  it('should de able to Autentcate', async () => {
    const auth = await autentcateUsers.execute({
      email: 'johndoe@example.com',
      password: 'senha',
    });
    expect(auth).toHaveProperty('user');
    expect(auth).toHaveProperty('token');
  });
  it('should return an error if the password is incorrect', async () => {
    await expect(
      autentcateUsers.execute({
        email: 'johndoe@example.com',
        password: '121525',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it(' should return an error if the email is incorrect', async () => {
    await expect(
      autentcateUsers.execute({
        email: 'johntri@example.com',
        password: 'senha',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
