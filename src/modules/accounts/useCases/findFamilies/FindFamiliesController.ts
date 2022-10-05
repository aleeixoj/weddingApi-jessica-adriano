import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindFamiliesUseCase } from './FindFamiliesUseCase';



class FindFamiliesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, page } = request.query

    const args = {
      limit, page
    }

    const findFamiliesUseCase = container.resolve(FindFamiliesUseCase);
    const families = await findFamiliesUseCase.execute(args);

    return response.status(200).json({
      data: {
        items: families,
        total: families.length
      }
    });
  }
}
export { FindFamiliesController };
