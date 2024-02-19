import 'react-native-gesture-handler';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Providers from './src/components/Providers';
import RootRoute from './src/routes/RootRoute';

if (Platform.OS === 'android') {
  // only android needs polyfill
  require('intl');
  require('intl/locale-data/jsonp/pt-AO');
  require('intl/locale-data/jsonp/en-US');
}

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs([
      'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
    ]);
  }, []);
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Providers>
        <NavigationContainer>
          <RootRoute />
        </NavigationContainer>
      </Providers>
    </GestureHandlerRootView>
  );
}
