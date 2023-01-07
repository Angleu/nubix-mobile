import { AxiosError } from 'axios';

import axios from '../config';
import {
  CreateUserRequestType,
  CreateUserResponseType,
  GetUserResponseType,
} from './types';

export async function getUser(nif: string) {
  try {
    const response = await axios.get<GetUserResponseType>(`/user/${nif}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 302:
          throw new Error('O Utilizador não existe', { cause });
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

export async function createUserWithPersonalData(user: CreateUserRequestType) {
  try {
    const response = await axios.post<CreateUserResponseType>('/user', user);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 302:
          throw new Error('O Utilizador já existe', { cause });
        case 400:
          throw new Error('Erro no envio dos dados de criação de conta', {
            cause,
          });
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
