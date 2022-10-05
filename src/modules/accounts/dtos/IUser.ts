import { Decimal } from '@prisma/client/runtime';

interface IAddress {
  street: string;
  city: string;
  province: string;
  state: string;
  number: Decimal;
  complement: string;
}

interface ICreateUser {
  name: string;
  familyId: string;
}

export { IAddress, ICreateUser };
