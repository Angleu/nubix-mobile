import { AxiosResponse } from 'axios';

import { UserType } from '../../models/User';
import axios from '../config';
import {
  AuthenticationRequestType,
  AuthenticationResponseType,
  ContactResponseType,
  CreateUserRequestType,
  CreateUserResponseType,
  NormalizedContactType,
} from './types';

export async function createUser(userBody: CreateUserRequestType) {
  try {
    const response = await axios.post<CreateUserResponseType>('/login', {
      confirmPassword: userBody.password,
      ...userBody,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllContacts() {
  try {
    const response = await axios.get<ContactResponseType[]>('/login/contacts');
    const contacts = response.data.map(cleanContact);
    return contacts;
  } catch (error) {
    throw new Error(error.message);
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
    const user = transformUser(response.data);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

function cleanContact(contact: ContactResponseType) {
  const cleanedContact: NormalizedContactType = {
    phoneNumber: contact.telephone,
    firstName: contact.User ? contact.User.name : '',
    lastName: contact.User ? contact.User.surname : '',
  };
  return cleanedContact;
}

function transformUser(user: AuthenticationResponseType) {
  const { email, isVerified, telephone, user: _user, created_at } = user;
  const {
    avatar,
    name,
    surname,
    id_user,
    NIF,
    birth_day,
    sex,
    Address: { city, country },
  } = _user;
  const transformedUser: UserType = {
    email,
    isVerified,
    phoneNumber: telephone,
    avatarImageURL: avatar,
    firstName: name,
    lastName: surname,
    id: id_user,
    nif: NIF,
    birthDate: new Date(birth_day),
    sex,
    accounts: [],
    address: {
      city,
      country,
    },
    contacts: [],
    createdAt: new Date(created_at),
  };
  return transformedUser;
}
