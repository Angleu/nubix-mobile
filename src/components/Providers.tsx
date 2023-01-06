import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NativeBaseProvider } from 'native-base';
import React, { FC, ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserProvider } from '../context/UserContext';
import theme from '../utils/theme';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <UserProvider>{children}</UserProvider>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </NativeBaseProvider>
  );
};

export default Providers;
