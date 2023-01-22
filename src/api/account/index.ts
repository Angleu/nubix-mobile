import { UserType } from '../../models/User';
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

export async function getAllAccountsFromUser(user: UserType) {
  const { accounts } = user;
  try {
    const updatedAccounts = [];
    const ibans = accounts.map((account) => account.IBAN);
    for (let i = 0; i < ibans.length; i++) {
      const iban = ibans[i];
      const updatedAccount = await getAccount(iban);
      updatedAccounts.push(updatedAccount);
    }
    return updatedAccounts;
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
