import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Login, SignUpStepOne, SignUpStepThree, SignUpStepTwo } from '../views';
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
      <AuthStack.Screen name="SignUpStepOne" component={SignUpStepOne} />
      <AuthStack.Screen name="SignUpStepTwo" component={SignUpStepTwo} />
      <AuthStack.Screen name="SignUpStepThree" component={SignUpStepThree} />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
