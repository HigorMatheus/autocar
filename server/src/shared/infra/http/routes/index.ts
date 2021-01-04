import UsersRoutes from '@modules/users/infra/routes';
import { Router } from 'express';

const Routes = Router();
Routes.use('/user', UsersRoutes);
export default Routes;
