import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { extendTheme, NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamList, RoutesEnum, Views } from './src/constants/routes';
import { colorPallet } from './src/utils/theme';

const theme = extendTheme({ colors: colorPallet });
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={RoutesEnum.Home}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name={RoutesEnum.Home}
              component={Views[RoutesEnum.Home]}
            />
            <Stack.Screen
              name={RoutesEnum.Transfer}
              component={Views[RoutesEnum.Transfer]}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
