import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUsersByFamilyIdUseCase } from './FindUsersByFamilyIdUseCase';

class FindUsersByFamilyIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const findUsersByFamilyIdUseCase = container.resolve(FindUsersByFamilyIdUseCase);
    const users = await findUsersByFamilyIdUseCase.execute(String(id));

    return response.status(200).json({
      data: {
        items: users,
        total: users.length
      }
    });
  }
}
export { FindUsersByFamilyIdController };
