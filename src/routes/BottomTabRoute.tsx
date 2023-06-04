import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Location from 'expo-location';
import { Box, useTheme } from 'native-base';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { Analytics, ATMLocator, Home, Wallet } from '../views';
import { MainBottomTabParamListType } from './types';


const BottomTab = createBottomTabNavigator<MainBottomTabParamListType>();

const BottomTabRoute = () => {
  const { colors } = useTheme();

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const activeColor = colors.primary[50];
  const inactiveColor = colors.muted[300];

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          elevation: 0,
          borderWidth: 0,
          height: Platform.OS === 'android' ? 60 : 90,
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <>
              <MaterialIcons name="home-filled" size={30} color={color} />
              {focused && (
                <Box
                  style={{
                    marginTop: 6,
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: activeColor,
                  }}
                />
              )}
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <MaterialIcons name="analytics" size={30} color={color} />
              {focused && (
                <Box
                  style={{
                    marginTop: 6,
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: activeColor,
                  }}
                />
              )}
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallets"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <Entypo name="wallet" size={30} color={color} />
              {focused && (
                <Box
                  style={{
                    marginTop: 6,
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: activeColor,
                  }}
                />
              )}
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name="ATMLocator"
        component={ATMLocator}
        initialParams={location}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <MaterialIcons name="location-on" size={30} color={color} />
              {focused && (
                <Box
                  style={{
                    marginTop: 6,
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    backgroundColor: activeColor,
                  }}
                />
              )}
            </>
          ),
          tabBarStyle: { display: 'none' },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabRoute;
