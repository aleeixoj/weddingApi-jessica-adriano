import { inject, injectable } from 'tsyringe';

import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';
import { Family } from '@prisma/client';
import { AppError } from '@shared/errors/AppError';

@injectable()
class FindFamilyByAccessCodeUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) { }
  async execute(code: string): Promise<Family> {
    const family = await this.familyRepository.findByAccessCode(code);

    if (!family) {
      throw new AppError('O código digitado está incorreto!');
    }
    return family;
  }
}
export { FindFamilyByAccessCodeUseCase };
