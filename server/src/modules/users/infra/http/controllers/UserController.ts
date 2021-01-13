import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import CreateUserService from '@modules/users/services/CreateUsersService';

class userController {
  public create = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const createUser = container.resolve(CreateUserService);

    const { name, email, password } = request.body;

    const userCreated = await createUser.execute({
      name,
      email,
      password,
    });
    return response.status(201).json(classToClass(userCreated));
  };
}

export default userController;
