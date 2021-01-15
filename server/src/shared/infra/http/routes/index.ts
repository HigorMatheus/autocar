import { Router } from 'express';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/section.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();
routes.use('/user', usersRoutes);
routes.use('/profile', profileRoutes);
routes.use('/session', sessionsRouter);
export default routes;
