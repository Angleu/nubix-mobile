import { CreateAddressRequestType } from './types';

// TODO: Needs to implement after the API is fixed
export async function getAddress() {
  throw new Error('Not implemented');
}

export async function createAddress(address: CreateAddressRequestType) {
  console.log(address);
  throw new Error('Not implemented');
}
