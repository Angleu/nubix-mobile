import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamListType } from './src/constants/routes';
import theme from './src/utils/theme';
import { Home, Transfer } from './src/views';

const Stack = createNativeStackNavigator<RootStackParamListType>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="transfer" component={Transfer} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
