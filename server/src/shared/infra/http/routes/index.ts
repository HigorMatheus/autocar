import { Router } from 'express';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/section.routes';

const routes = Router();
routes.use('/user', usersRoutes);
routes.use('/session', sessionsRouter);
export default routes;
