import { AxiosError } from 'axios';

import axios from '../config';
import {
  CreateAccountRequestType,
  CreateAccountResponseType,
  GetAccountResponseType,
} from './types';

export async function getAccount(iban: string) {
  try {
    const response = await axios.get<GetAccountResponseType>(
      `/account/${iban}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 302:
          throw new Error('A conta não existe', {
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

export async function createAccount(account: CreateAccountRequestType) {
  try {
    const response = await axios.post<CreateAccountResponseType>(
      '/account/',
      account
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 302:
          throw new Error('A conta já existe', { cause });
        case 400:
          throw new Error('Erro no envio dos dados de criação de conta', {
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
