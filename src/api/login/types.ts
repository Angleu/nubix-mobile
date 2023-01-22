import { ContactType } from '../../models/Contact';

export type AuthenticationResponseType = {
  email: string;
  isVerified: boolean;
  telephone: string;
  created_at: string;
  user: {
    id_user: string;
    NIF: string;
    name: string;
    surname: string;
    avatar: string;
    birth_day: string;
    sex: string;
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

export type ContactResponseType = ContactType;

export type NormalizedContactType = {
  phoneNumber: string;
  firstName: string;
  lastName: string;
};

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
