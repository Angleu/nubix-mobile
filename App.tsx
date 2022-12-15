import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colorPallet } from './src/utils/theme';
// import Home from './src/views/Home';
import Transfer from './src/views/Home/Transfer';

const theme = extendTheme({ colors: colorPallet });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView>
        <Transfer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
