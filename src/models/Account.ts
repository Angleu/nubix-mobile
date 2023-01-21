import { TransactionType } from './Transaction';

export type AccountType = {
  id_account: string;
  number_account: string;
  balance: number;
  IBAN: string;
  coin: string;
  created_at: string;
  updated_at: string;
  Transaction: TransactionType[];
  Card: unknown;
};

export type CurrencyLiteral = '$' | 'Kzs';
