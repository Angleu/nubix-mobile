import { CreateAccountRequestType } from './types';

// TODO: Needs to implement after the API is fixed
export async function getAccount() {
  throw new Error('Not implemented');
}

export async function createAccount(account: CreateAccountRequestType) {
  console.log(account);
  throw new Error('Not implemented');
}
