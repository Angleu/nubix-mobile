import { AxiosError } from 'axios';

import axios from '../config';
import { CreateAddressRequestType, CreateAddressResponseType } from './types';

// TODO: Needs to implement after the API is fixed
export async function getAddress() {
  throw new Error('Not implemented');
}

export async function createAddress(address: CreateAddressRequestType) {
  try {
    const response = await axios.post<CreateAddressResponseType>(
      '/user/address',
      address
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 400:
          throw new Error(
            'Erro no envio dos dados de criação de conta de endereço',
            {
              cause,
            }
          );
        case 401:
          throw new Error('Dados de login não foram encontrados', {
            cause,
          });
        default:
          throw new Error(
            'Existe um problema com o servidor. Tente mais tarde',
            { cause }
          );
      }
    }
    throw new Error('Erro ao se conectar com o servidor', { cause: error });
  }
}
