export type AuthenticationResponseType = {
  email: string;
  isVerified: boolean;
  telephone: string;
  user: {
    id_user: string;
    NIF: string;
    name: string;
    surname: string;
    avatar: string;
    Account: ReadonlyArray<{
      number_account: string;
      balance: number;
      IBAN: string;
      coin: string;
      created_at: string;
      updated_at: string;
      Transaction: Array<unknown>;
    }>;
    Address: {
      country: string;
      city: string;
      street: string;
      houseNumber: string;
    };
  };
};

export type AuthenticationRequestType = {
  value: string;
  password: string;
};

export type ContactResponseType = {
  telephone: string;
  User?: {
    name: string;
    surname: string;
  };
};

export type NormalizedContactType = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
};

// XXX Not implemented - API needs to be fixed
export type CreateUserResponseType = {
  email: string;
  telephone: string;
  password: string;
  isVerified: boolean;
  created_at: string;
};

export type CreateUserRequestType = {
  email: string;
  telephone: string;
  password: string;
};
