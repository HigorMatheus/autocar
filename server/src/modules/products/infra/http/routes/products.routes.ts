import isAuthenticatedServer from '@modules/users/infra/http/middlewares/Authenticate';
import { Router } from 'express';
import ProductsController from '../controllers/ProductsControllers';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.post('/', isAuthenticatedServer, productsController.create);
productsRouter.get('/', productsController.index);

export default productsRouter;
