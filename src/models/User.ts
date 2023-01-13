import { AccountType } from './Account';

export type Old_UserType = {
  id: string;
  name: string;
  phoneNumber: string;
  profilePictureURL: string;
  accounts: AccountType[];
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
  accounts: ReadonlyArray<unknown>;
  contacts: ReadonlyArray<unknown>;
  address: {
    country: string;
    city: string;
  };
};

export type UserInfoType = Omit<Old_UserType, 'accounts'>;
