import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NativeBaseProvider } from 'native-base';
import React, { FC, ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserProvider } from '../context/UserContext';
import theme from '../utils/theme';

const client = new QueryClient();

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme}>
      <QueryClientProvider client={client}>
        <BottomSheetModalProvider>
          <SafeAreaProvider>
            <UserProvider>{children}</UserProvider>
          </SafeAreaProvider>
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default Providers;
