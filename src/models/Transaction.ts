import { CurrencyLiteral } from './Account';
import { UserInfoType } from './User';

export type TransactionType =
  | ({ type: 'send' } & SendMoneyTransactionType)
  | ({ type: 'payment' } & PaymentTransactionType)
  | ({ type: 'receive' } & ReceiveMoneyTransactionType);

type SendMoneyTransactionType = {
  destination: UserInfoType;
  message?: string;
} & BasicTransactionType;

type PaymentTransactionType = {
  entityName: string;
} & BasicTransactionType;

type ReceiveMoneyTransactionType = {
  origin: UserInfoType;
  message?: string;
} & BasicTransactionType;

type BasicTransactionType = {
  amount: number;
  currency: CurrencyLiteral;
  transactionDate: string;
};
