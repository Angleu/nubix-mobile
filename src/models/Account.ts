export type AccountType = {
  balance: number;
  currency: CurrencyLiteral;
  iban: string;
  accountNumber: string;
};

export type CurrencyLiteral = '$' | 'Kzs';
