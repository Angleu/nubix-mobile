import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { AccountType } from '../models/Account';
import { ContactType } from '../models/Contact';
import { TransactionType } from '../models/Transaction';

import {LocationObject} from 'expo-location';



export type MainStackParamListType = {
  HomeTab: undefined;
  Transfer: undefined;
  TransferConfirmation: {
    destination: ContactType;
    transferAmount: string;

    message?: string;
  };
  TransferValue: {
    destination: ContactType;
  };
  Payment: undefined;
  NFCPayment: undefined;
  Receive: {
    accountToReceive: AccountType;
  };
  Deposit: {
    accountToReceive: AccountType;
  };
  DepositProvider: {
    amount: string;
    currency: string;
    accountToReceive: AccountType;
  };
  DepositProviderCreditCard: {
    amount: string;
    currency: string;
    accountToReceive: AccountType;
  };
  DepositProviderBank: {
    amount: string;
    currency: string;
    accountToReceive: AccountType;
  };
  AnalyticsIncome: undefined;
  AnalyticsExpense: undefined;
  Details: {
    transaction: TransactionType;
  };
  QRScanner: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamListType> =
  NativeStackScreenProps<MainStackParamListType, T>;

export type MainStackNavigationProps<T extends keyof MainStackParamListType> =
  NativeStackNavigationProp<MainStackParamListType, T>;

// Auth Native Stack
export type AuthStackParamListType = {
  Login: {
    errorMessage?: string;
    signUpSuccess?: boolean;
  };
  SignUpStepOne: undefined;
  SignUpStepTwo: {
    email: string;
    phoneNumber: string;
  };
  SignUpStepThree: {
    email: string;
    phoneNumber: string;
  };
};

export type AuthStackScreenProps<T extends keyof AuthStackParamListType> =
  NativeStackScreenProps<AuthStackParamListType, T>;

export type AuthStackNavigationProps<T extends keyof AuthStackParamListType> =
  NativeStackNavigationProp<AuthStackParamListType, T>;

// Bottom Tab Navigator
export type MainBottomTabParamListType = {
  Home: undefined;
  Analytics: undefined;
  Wallets: undefined;
  ATMLocator: LocationObject;
};

export type MainBottomTabScreenProps<
  T extends keyof MainBottomTabParamListType
> = BottomTabScreenProps<MainBottomTabParamListType, T>;

export type MainBottomTabNavigationProps<
  T extends keyof MainBottomTabParamListType
> = BottomTabNavigationProp<MainBottomTabParamListType, T>;
