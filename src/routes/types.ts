import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { AccountType } from '../models/Account';
import { TransactionType } from '../models/Transaction';
import { UserInfoType } from '../models/User';

export type MainStackParamListType = {
  HomeTab: undefined;
  Transfer: undefined;
  TransferConfirmation: {
    destination: UserInfoType;
    transferAmount: string;
    message?: string;
  };
  TransferValue: {
    destination: UserInfoType;
  };
  Payment: undefined;
  NFCPayment: undefined;
  Receive: {
    accountToReceive: AccountType;
  };
  Deposit: undefined;
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
  };
  SignUpStepThree: {
    email: string;
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
  ATMLocator: undefined;
};

export type MainBottomTabScreenProps<
  T extends keyof MainBottomTabParamListType
> = BottomTabScreenProps<MainBottomTabParamListType, T>;

export type MainBottomTabNavigationProps<
  T extends keyof MainBottomTabParamListType
> = BottomTabNavigationProp<MainBottomTabParamListType, T>;
