import { Router } from 'express';

import { CreateFamilyController } from '@modules/accounts/useCases/createFamily/CreateFamilyController';
import { CreateFamilyUserController } from '@modules/accounts/useCases/createFamilyUser/CreateFamilyUserController';
import { FindFamilyByAccessCodeController } from '@modules/accounts/useCases/findFamilyByAccessCode/FindFamilyByAccessCodeController';
import { FindFamiliesController } from '@modules/accounts/useCases/findFamilies/FindFamiliesController';

const familyRoutes = Router();

const createFamilyController = new CreateFamilyController();
const createFamilyUserController = new CreateFamilyUserController();
const findFamilyByAccessCodeController = new FindFamilyByAccessCodeController();
const findFamiliesController = new FindFamiliesController();

familyRoutes.post('/create', createFamilyController.handle);
familyRoutes.post('/addUser', createFamilyUserController.handle);
familyRoutes.get('/all', findFamiliesController.handle);

familyRoutes.get('/', findFamilyByAccessCodeController.handle);

export { familyRoutes };
