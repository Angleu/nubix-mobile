import { AxiosResponse } from 'axios';
import * as Contacts from 'expo-contacts';

import { AccountType } from '../../models/Account';
import { ContactType } from '../../models/Contact';
import { UserType } from '../../models/User';
import axios from '../config';
import { getAllTransactions } from '../transaction';
import {
  AuthenticationRequestType,
  AuthenticationResponseType,
  ContactResponseType,
  CreateUserRequestType,
  CreateUserResponseType,
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

export async function filterContacts(
  phoneNumbers: string[]
): Promise<ContactType[]> {
  try {
    const response = await axios.post<ContactResponseType[]>('/contacts', {
      phoneNumbers,
    });
    return response.data;
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
    >('/authentication', {
      password,
      value: emailOrPhoneNumber,
    });
    const user = transformUser(response.data);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function transformUser(user: AuthenticationResponseType) {
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
    Account,
  } = _user;

  const phoneNumbers = await (
    await fetchAllUserContacts()
  )
    .flatMap(({ phoneNumbers }) => phoneNumbers)
    .map((phoneNumber) => {
      if (!phoneNumber.startsWith('+')) return '+244' + phoneNumber;
      return phoneNumber;
    });
  const registeredContacts = await filterContacts([...new Set(phoneNumbers)]);
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
    accounts: Account as AccountType[],
    address: {
      city,
      country,
    },
    contacts: registeredContacts,
    createdAt: new Date(created_at),
  };
  for (let i = 0; i < transformedUser.accounts.length; i++) {
    const transactions = await getAllTransactions(
      transformedUser.accounts[i].number_account
    );
    transformedUser.accounts[i].Transaction = [...transactions];
  }
  return transformedUser;
}

async function fetchAllUserContacts() {
  const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
  });
  // console.log(data.forEach(({ phoneNumbers }) => console.log(phoneNumbers)));
  return data
    .filter(({ phoneNumbers }) => phoneNumbers !== undefined)
    .map(({ name, phoneNumbers }) => ({
      name,
      phoneNumbers: phoneNumbers
        ?.map((phoneNumber) => phoneNumber.number)
        .map((phoneNumber) => phoneNumber.replace(/\s/g, ''))
        .filter((phoneNumber) => phoneNumber.length > 8),
    }));
}