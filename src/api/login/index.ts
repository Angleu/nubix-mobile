import { AxiosError, AxiosResponse } from 'axios';

import axios from '../config';
import {
  AuthenticationRequestType,
  AuthenticationResponseType,
  ContactResponseType,
  CreateUserRequestType,
  CreateUserResponseType,
  NormalizedContactType as CleanedContactType,
} from './types';

export async function createUser(userBody: CreateUserRequestType) {
  try {
    const response = await axios.post<CreateUserResponseType>(
      '/login',
      userBody
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
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

export async function getAllContacts() {
  try {
    const response = await axios.get<ContactResponseType[]>('/login/contacts');
    const contacts = response.data.map(cleanContact);
    return contacts;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { cause } = error;
      throw new Error('Existe um problema com o servidor. Tente mais tarde', {
        cause,
      });
    }
    throw new Error('Erro ao se conectar com o servidor', { cause: error });
  }
}

export async function authenticate(
  emailOrPhoneNumber: string,
  password: string
) {
  try {
    const response = await axios.post<
      AuthenticationResponseType,
      AxiosResponse<AuthenticationResponseType>,
      AuthenticationRequestType
    >('/login/authentication', {
      password,
      value: emailOrPhoneNumber,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const { status, cause } = error;
      switch (status) {
        case 401:
          throw new Error('O utilizador não existe', { cause });
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

function cleanContact(contact: ContactResponseType) {
  const cleanedContact: CleanedContactType = {
    phoneNumber: contact.telephone,
    firstName: contact.User ? contact.User.name : '',
    lastName: contact.User ? contact.User.surname : '',
  };
  return cleanedContact;
}
