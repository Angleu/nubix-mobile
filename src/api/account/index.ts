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
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
}
