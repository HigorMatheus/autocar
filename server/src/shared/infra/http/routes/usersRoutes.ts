import { Router } from 'express';

import { getRepository } from 'typeorm';
import UserController from '../../../../controllers/userController';
import User from '../../../../entities/User';

const usersRoutes = Router();
const userController = new UserController();
usersRoutes.post('/create', userController.create);

usersRoutes.get('/', async (req, res) => {
  const userRepository = getRepository(User);

  const users = await userRepository.find();
  res.json(users);
});

export default usersRoutes;
