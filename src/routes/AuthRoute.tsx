import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Login, SignUp } from '../views';
import { AuthStackParamListType } from './types';

const AuthStack = createNativeStackNavigator<AuthStackParamListType>();

const AuthRoute = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
