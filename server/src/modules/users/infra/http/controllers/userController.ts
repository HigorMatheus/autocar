import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/createUserService';

class userController {
  public create = async (
    request: Request,
    response: Response,
  ): Promise<void> => {
    const createUser = container.resolve(CreateUserService);
    const { name, email, password } = request.body;
    console.log(name);

    const userCreated = await createUser.execute({
      name,
      email,
      password,
    });
    response.json(userCreated);
  };
}

export default userController;
