import { Router } from 'express';
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/section.routes';
import profileRoutes from '@modules/users/infra/http/routes/profile.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';

const routes = Router();
/*
 * user
 */
routes.use('/user', usersRoutes);
routes.use('/profile', profileRoutes);
routes.use('/session', sessionsRouter);
/*
 * products
 */
routes.use('/products', productsRouter);
export default routes;
