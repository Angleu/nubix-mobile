import { useNavigation } from '@react-navigation/native';
import { Text, View, VStack } from 'native-base';
import { XCircle } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import { SharedElement } from 'react-navigation-shared-element';

import Buttom from '../../components/button/Buttom';
import {
  MainBottomTabScreenProps,
  MainStackNavigationProps,
} from '../../routes/types';

const ATMLocator = ({
  route,
  navigation,
}: MainBottomTabScreenProps<'ATMLocator'>) => {
  // const navigate = useNavigation();
  const { coords } = route.params;
  const { push } = useNavigation<MainStackNavigationProps<'FindPost'>>();
  const [state, setState] = useState('');
  // useEffect(() => {

  // }, [state]);
  function handlePressDeposit() {
    setState('deposit');
    console.log(state);
    push('FindPost', {
      latitude: coords.latitude,
      longitude: coords.longitude,
      search: state,
    });
  }
  function handlePressWitdhraw() {
    setState('witdhraw');
    console.log(state);
  }
  return (
    <View flex={1}>
      <Pressable
        style={{
          top: 30,
          left: 25,
          position: 'absolute',
          zIndex: 10,
        }}
        onPress={() => navigation.goBack()}
      >
        <XCircle size={52} color="#000" />
      </Pressable>
      <View flex={1} rounded={'full'} shadow={6} borderBottomRadius={'3xl'}>
        {/* <SharedElement id="map"> */}
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.9,
            longitudeDelta: 0.9,
          }}
        >
          <Marker
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
          />
        </MapView>
        {/* </SharedElement> */}
      </View>
      <VStack
        alignItems="center"
        justifyContent="center"
        space={6}
        width="full"
        padding={10}
      >
        <Text
          color={'primary.100'}
          fontWeight={'bold'}
          fontSize={'3xl'}
          textTransform={'uppercase'}
        >
          Localizar
        </Text>
        <Text textAlign={'center'} fontSize={'lg'} fontWeight={'light'}>
          Localize o posto mais proximo se si para realizar operações bancarias{' '}
        </Text>
        <VStack space={6} width="full">
          <Buttom text="Depositar" onPress={handlePressDeposit} />
          <Buttom outline text="Levantamento" onPress={handlePressWitdhraw} />
        </VStack>
      </VStack>
    </View>
  );
};

export default ATMLocator;
