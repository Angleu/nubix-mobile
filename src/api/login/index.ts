import { AxiosResponse } from 'axios';

import axios from '../config';
import {
  AuthenticationRequestType,
  AuthenticationResponseType,
  ContactResponseType,
  NormalizedContactType,
} from './types';

// XXX Do not use this function yet
export function createUser() {
  throw new Error('Function not implemented duw to API config');
}

export async function getAllContacts() {
  try {
    const response = await axios.get<ContactResponseType[]>('/login/contacts');
    const contacts = response.data.map(normalizeContact);
    return contacts;
  } catch (error) {
    console.error(error);
    throw new Error('Error on fetching the contacts');
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
    console.error(error);
    throw new Error('Error on authenticate the user');
  }
}

function normalizeContact(contact: ContactResponseType) {
  const normalizedContact: NormalizedContactType = {
    phoneNumber: contact.telephone,
    firstName: contact.User ? contact.User.name : '',
    lastName: contact.User ? contact.User.surname : '',
  };
  return normalizedContact;
}

// TODO: Create the normalize function for the auth user
