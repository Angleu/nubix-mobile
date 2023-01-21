export type Old_AccountType = {
  balance: number;
  currency: CurrencyLiteral;
  iban: string;
  accountNumber: string;
};

export type AccountType = {
  id_account: string;
  number_account: string;
  balance: number;
  IBAN: string;
  coin: string;
  created_at: string;
  updated_at: string;
  Transaction: unknown[];
  Card: unknown;
};

export type CurrencyLiteral = '$' | 'Kzs';
