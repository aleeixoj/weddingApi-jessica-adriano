import { inject, injectable } from 'tsyringe';

import { Family } from '@prisma/client';
import { IFamilyRepository } from '@modules/accounts/repositories/IFamilyRepository';

@injectable()
class FindFamiliesUseCase {
  constructor(
    @inject('FamilyRepository')
    private familyRepository: IFamilyRepository
  ) { }
  async execute(args: any): Promise<Family[]> {
    const families = await this.familyRepository.findAll(args);
    return families;
  }
}
export { FindFamiliesUseCase };
