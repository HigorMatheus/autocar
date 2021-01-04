import UserController from '@modules/users/infra/Controllers/UserController';
import { Router } from 'express';

const userController = new UserController();

const UsersRoutes = Router();

UsersRoutes.post('/create', userController.create);

UsersRoutes.get('/', userController.index);

export default UsersRoutes;
