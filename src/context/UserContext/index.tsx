import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { authenticate } from '../../api/login';
import { UserType } from '../../models/User';
import { clearUser, getUser, storeUser } from '../../utils/storage/user';
import { UserContextType } from './types';

const UserContext = createContext<UserContextType>({} as UserContextType);
export default UserContext;

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const loginStoredUser = useCallback(async () => {
    const storedUser = await getUser();
    if (storedUser) {
      const { emailOrPhoneNumber, password } = storedUser;
      await signIn(emailOrPhoneNumber, password);
    }
  }, []);

  useEffect(() => {
    loginStoredUser();
  }, [loginStoredUser]);

  async function signIn(
    emailOrPhoneNumber: string,
    password: string,
    rememberUser = false
  ) {
    try {
      setIsLoading(true);
      const userLoggedIn = await authenticate(emailOrPhoneNumber, password);
      setUser(userLoggedIn);
      if (rememberUser) await storeUser(emailOrPhoneNumber, password);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function updateUserData() {
    await loginStoredUser();
  }

  function logout() {
    clearUser()
      .then(() => setUser(undefined))
      .catch(console.error);
  }

  const providerValue: UserContextType = {
    signIn,
    logout,
    user,
    isLoading,
    isAuthenticated: !!user,
    updateUserData,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
