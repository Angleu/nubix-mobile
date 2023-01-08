import { createContext, FC, ReactNode } from 'react';

import { UserContextType } from './types';

const UserContext = createContext<UserContextType>({} as UserContextType);
export default UserContext;

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const providerValue: UserContextType = {};

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
