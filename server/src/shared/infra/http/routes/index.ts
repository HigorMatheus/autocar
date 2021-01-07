import { Router } from 'express';
import usersRoutes from '@modules/users/infra/http/routes/UsersRoutes';

const routes = Router();
routes.use('/user', usersRoutes);
export default routes;
