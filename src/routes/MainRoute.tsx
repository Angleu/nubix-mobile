import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  Deposit,
  Details,
  ExpenseAnalytics,
  IncomeAnalytics,
  NFCPayment,
  Payment,
  QRScanner,
  ReceiveMoney,
  Transfer,
  TransferConfirmation,
  TransferValue,
} from '../views';
import BottomTabRoute from './BottomTabRoute';
import { MainStackParamListType } from './types';

const MainStack = createNativeStackNavigator<MainStackParamListType>();

const MainRoute = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeTab" component={BottomTabRoute} />
      <MainStack.Screen name="Deposit" component={Deposit} />
      <MainStack.Screen name="Payment" component={Payment} />
      <MainStack.Screen name="Receive" component={ReceiveMoney} />
      <MainStack.Screen name="Transfer" component={Transfer} />
      <MainStack.Screen
        name="TransferConfirmation"
        component={TransferConfirmation}
      />
      <MainStack.Screen name="TransferValue" component={TransferValue} />
      <MainStack.Screen name="NFCPayment" component={NFCPayment} />
      <MainStack.Screen name="AnalyticsExpense" component={ExpenseAnalytics} />
      <MainStack.Screen name="AnalyticsIncome" component={IncomeAnalytics} />
      <MainStack.Screen name="Details" component={Details} />
      <MainStack.Screen name="QRScanner" component={QRScanner} />
    </MainStack.Navigator>
  );
};

export default MainRoute;
