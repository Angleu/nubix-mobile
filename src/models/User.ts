import { AccountType, Old_AccountType } from './Account';
import { ContactType } from './Contact';

export type Old_UserType = {
  id: string;
  name: string;
  phoneNumber: string;
  profilePictureURL: string;
  accounts: Old_AccountType[];
};

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

export type UserInfoType = Omit<Old_UserType, 'accounts'>;
