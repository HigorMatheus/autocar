import { Router } from 'express';
import usersRoutes from './usersRoutes';

const routes = Router();
routes.use('/user', usersRoutes);
export default routes;
