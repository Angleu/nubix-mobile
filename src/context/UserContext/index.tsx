import { createContext, FC, ReactNode, useState } from 'react';

import { authenticate } from '../../api/login';
import { UserType } from '../../models/User';
import { UserContextType } from './types';

const UserContext = createContext<UserContextType>({} as UserContextType);
export default UserContext;

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn(emailOrPhoneNumber: string, password: string) {
    try {
      setIsLoading(true);
      const userLoggedIn = await authenticate(emailOrPhoneNumber, password);
      setUser(userLoggedIn);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setUser(undefined);
  }

  const providerValue: UserContextType = {
    signIn,
    logout,
    user,
    isLoading,
    isAuthenticated: !!user,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
