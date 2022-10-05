import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from '@prisma/client';

@injectable()
class FindUsersByFamilyIdUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  async execute(id: string): Promise<User[]> {
    const users = await this.usersRepository.findAllUsersByFamilyId(id);
    return users;
  }
}
export { FindUsersByFamilyIdUseCase };
