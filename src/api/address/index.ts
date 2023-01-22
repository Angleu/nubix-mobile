import axios from '../config';
import { CreateAddressRequestType, CreateAddressResponseType } from './types';

// TODO: Needs to implement after the API is fixed
export async function getAddress() {
  throw new Error('Not implemented');
}

export async function createAddress(address: CreateAddressRequestType) {
  try {
    const response = await axios.post<CreateAddressResponseType>(
      '/address',
      address
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
