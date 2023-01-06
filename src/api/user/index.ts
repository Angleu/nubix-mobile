import { CreateUserRequestType } from './types';

// TODO: Needs to implement after the API is fixed
export async function getUser() {
  throw new Error('Not implemented');
}

export async function createUserWithPersonalData(user: CreateUserRequestType) {
  console.log(user);
  throw new Error('Not implemented');
}
