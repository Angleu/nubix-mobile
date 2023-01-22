import { UserType } from '../../models/User';

export type UserContextType = {
  signIn: (
    emailOrPhoneNumber: string,
    password: string,
    remember?: boolean
  ) => Promise<void>;
  logout: () => void;
  user?: UserType;
  isAuthenticated: boolean;
  isLoading: boolean;
  updateUserData: () => Promise<void>;
};
