import { Platform } from 'react-native';

import { UserType } from '../../models/User';
import axios from '../config';
import {
  CreateAccountRequestType,
  CreateAccountResponseType,
  DepositCardRequestType as DepositRequestType,
  DepositCardResponseType,
  GetAccountResponseType,
  SaveReceiptResponseType,
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
    const updatedAccounts: GetAccountResponseType[] = [];
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

export async function depositCard(depositDetails: DepositRequestType) {
  try {
    const response = await axios.post<DepositCardResponseType>(
      '/account/deposit/card',
      depositDetails
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao efetuar o depósito');
  }
}

export async function deposit(
  accountNumber: string,
  depositDetails: DepositRequestType
) {
  try {
    const response = await axios.post<GetAccountResponseType>(
      `/account/deposit/${accountNumber}`,
      depositDetails
    );
    return response.data;
  } catch (error) {
    throw new Error('Erro ao efetuar o depósito');
  }
}

export async function saveReceipt(fileUri: string) {
  try {
    const uri =
      Platform.OS === 'android' ? fileUri : fileUri.replace('file://', '');
    const filename = fileUri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename as string);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    const fileData = new FormData();
    fileData.append('comprovativo-express', {
      uri,
      name: `file.${ext}`,
      type,
    } as never);
    const response = await axios.post<SaveReceiptResponseType>(
      '/comprovativo/validacao/multicaixa-express',
      fileData,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Não é possível enviar o comprovativo');
  }
}
