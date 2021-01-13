import { Router } from 'express';

import UserController from '../controllers/UserController';
// import ensureAuthenticated from '../middlewares/Authenticate';

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post('/create', userController.create);

// usersRoutes.post('/update', ensureAuthenticated, userController.update);

export default usersRoutes;
