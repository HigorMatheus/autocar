import { Router } from 'express';
import ProfileController from '../controllers/ProfileController';
import isAuthenticatedServer from '../middlewares/Authenticate';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get('/', isAuthenticatedServer, profileController.show);

export default profileRouter;
