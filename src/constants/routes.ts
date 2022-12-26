import { NativeStackScreenProps } from '@react-navigation/native-stack';

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
};

export type HomeScreenProp = NativeStackScreenProps<
  RootStackParamListType,
  'home'
>;

export type DetailsScreenProp = NativeStackScreenProps<
  RootStackParamListType,
  'details'
>;

export type TransferScreenProps = NativeStackScreenProps<
  RootStackParamListType,
  'transfer'
>;

export type TransferValueScreenProps = NativeStackScreenProps<
  RootStackParamListType,
  'transferValue'
>;

export type TransferConfirmationScreenProps = NativeStackScreenProps<
  RootStackParamListType,
  'transferConfirmation'
>;
