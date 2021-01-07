import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUsersService';

class userController {
  public create = async (
    request: Request,
    response: Response,
  ): Promise<void> => {
    const createUser = container.resolve(CreateUserService);

    const { name, email, password } = request.body;

    const userCreated = await createUser.execute({
      name,
      email,
      password,
    });
    response.json(userCreated);
  };
}

export default userController;
