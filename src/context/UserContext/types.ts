import { UserType } from '../../models/User';

export type UserContextType = {
  signIn: (emailOrPhoneNumber: string, password: string) => Promise<void>;
  logout: () => void;
  user?: UserType;
  isAuthenticated: boolean;
  isLoading: boolean;
};
