import { UserType } from '../../models/User';
import { SignUpFormType } from '../../utils/validation/signUpSchema';

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
  signUp: (userDetails: SignUpFormType) => Promise<void>;
};
