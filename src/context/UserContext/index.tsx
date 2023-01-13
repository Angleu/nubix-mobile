import { createContext, FC, ReactNode, useEffect, useState } from 'react';

import { createAddress } from '../../api/address';
import { authenticate, createUser } from '../../api/login';
import { createUserWithPersonalData } from '../../api/user';
import { UserType } from '../../models/User';
import { clearUser, getUser, storeUser } from '../../utils/storage/user';
import { SignUpFormType } from '../../utils/validation/signUpSchema';
import { UserContextType } from './types';

const UserContext = createContext<UserContextType>({} as UserContextType);
export default UserContext;

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loginStoredUser = async () => {
      const storedUser = await getUser();
      if (storedUser) {
        const { emailOrPhoneNumber, password } = storedUser;
        await signIn(emailOrPhoneNumber, password);
      }
    };
    loginStoredUser();
  }, []);

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

  function logout() {
    clearUser()
      .then(() => setUser(undefined))
      .catch(console.error);
  }

  async function signUp(userDetails: SignUpFormType) {
    const { stepOne, address, personalInfo } = userDetails;
    const { email, phoneNumber, password } = stepOne;
    await createUser({
      email,
      telephone: phoneNumber,
      password,
    });
    const { nif, firstName, lastName, gender, birthDate } = personalInfo;
    await createUserWithPersonalData({
      NIF: nif,
      name: firstName,
      middleName: '',
      surname: lastName,
      email,
      sex: gender,
      birth_day: birthDate.toISOString(),
    });
    const { coordinates, country, province } = address;
    await createAddress({
      city: province,
      country,
      street: '',
      houseNumber: '',
      latitude: coordinates.latitude.toString(),
      longitude: coordinates.longitude.toString(),
      email,
    });
  }

  const providerValue: UserContextType = {
    signIn,
    logout,
    user,
    isLoading,
    isAuthenticated: !!user,
    signUp,
  };

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};
