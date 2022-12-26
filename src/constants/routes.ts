import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { TransactionType } from '../models/Transaction';
import { UserInfoType } from '../models/User';

export type RootStackParamListType = {
  home: undefined;
  transfer: undefined;
  transferValue: {
    destination: UserInfoType;
  };
  deposit: undefined;
  payment: undefined;
  receiveMoney: undefined;
  scannerQr: undefined;
  transferConfirmation: {
    destination: UserInfoType;
    transferAmount: string;
    message?: string;
  };
  details: {
    transaction: TransactionType;
  };
  nfcPayment: undefined;
};

export type ScreenProps<T extends keyof RootStackParamListType> =
  NativeStackScreenProps<RootStackParamListType, T>;

export type NavigationProps<T extends keyof RootStackParamListType> =
  NativeStackNavigationProp<RootStackParamListType, T>;
