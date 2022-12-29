import { AccountType } from './Account';

export type UserType = {
  id: string;
  name: string;
  phoneNumber: string;
  profilePictureURL: string;
  accounts: AccountType[];
};

export type UserInfoType = Omit<UserType, 'accounts'>;
