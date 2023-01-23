export type GetAccountResponseType = {
  number_account: string;
  balance: number;
  IBAN: string;
  coin: string;
  created_at: string;
};

export type CreateAccountRequestType = {
  email: string;
  numberPhone: string;
};

export type DepositCardRequestType = {
  amount: number;
  currency: string;
};

export type DepositCardResponseType = {
  url: string;
  success: string;
  cancel: string;
};


export type CreateAccountResponseType = GetAccountResponseType;
