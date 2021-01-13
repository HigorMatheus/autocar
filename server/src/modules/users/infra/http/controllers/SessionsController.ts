import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SesstionController {
  public create = async (
    request: Request,
    response: Response,
  ): Promise<Response> => {
    const authenticateUser = container.resolve(AuthenticateUserService);

    const { email, password } = request.body;

    const SesstionCreated = await authenticateUser.execute({
      email,
      password,
    });

    return response.json(classToClass(SesstionCreated));
  };
}

export default SesstionController;
