import { AccountType } from './Account';
import { ContactType } from './Contact';

export type UserType = {
  id: string;
  createdAt: Date;
  isVerified: boolean;
  phoneNumber: string;
  email: string;
  nif: string;
  firstName: string;
  lastName: string;
  avatarImageURL?: string;
  sex: string;
  birthDate: Date;
  accounts: ReadonlyArray<AccountType>;
  contacts: Array<ContactType>;
  address: {
    country: string;
    city: string;
  };
};
