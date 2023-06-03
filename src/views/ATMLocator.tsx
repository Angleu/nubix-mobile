import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const ATMLocator = () => {
  return (
    <View>
      <MapView style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default ATMLocator;
