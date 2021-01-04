import UserRepository from '@modules/users/Repositories/UserRepository';
import { Request, Response } from 'express';
import User from '../routes/entities/User';

const userRepository = new UserRepository();
// index create updade show delete
class UserController {
  create = (request: Request, response: Response): Response<User> => {
    const { name, email, password } = request.body;

    const user = userRepository.CreateUser({ name, email, password });

    return response.json(user);
  };

  index = (request: Request, response: Response): Response<User[]> => {
    return response.json(userRepository.ListUsers());
  };
}

export default UserController;
