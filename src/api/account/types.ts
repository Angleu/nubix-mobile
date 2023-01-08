export type GetAccountResponseType = {
  number_account: string;
  balance: number;
  IBAN: string;
  coin: string;
  created_at: string;
};

export type CreateAccountRequestType = {
  IBAN: string;
  NIF: string;
  numberPhone: string;
};

export type CreateAccountResponseType = GetAccountResponseType;