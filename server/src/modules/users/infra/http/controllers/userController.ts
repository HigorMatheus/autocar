import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/createUserService';

class userController {
  public create = async (
    request: Request,
    response: Response,
  ): Promise<void> => {
    try {
      const createUser = container.resolve(CreateUserService);
      const { name, email, password } = request.body;
      const userCreated = await createUser.execute({
        name,
        email,
        password,
      });
      response.json(userCreated);
    } catch (error) {
      response.json(error);
    }
  };
}

export default userController;
