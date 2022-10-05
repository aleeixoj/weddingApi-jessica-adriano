import { Router } from 'express';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { FindUsersController } from '@modules/accounts/useCases/findUsers/FindUsersController';
import { FindUsersByFamilyIdController } from '@modules/accounts/useCases/findUsersByFamilyId/FindUsersByFamilyIdController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const findUsersController = new FindUsersController();
const findUsersByFamilyIdController = new FindUsersByFamilyIdController();


userRoutes.post('/create', createUserController.handle);
userRoutes.get('/getAll', findUsersController.handle);
userRoutes.get('/byFamily/:id', findUsersByFamilyIdController.handle)

export { userRoutes };
