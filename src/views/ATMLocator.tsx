import { useNavigation } from '@react-navigation/native';
import { Button, Text, View,VStack } from 'native-base';
import { XCircle } from 'phosphor-react-native';
import React from 'react';
import { Pressable } from 'react-native';
import MapView from 'react-native-maps';

import { androidRippleEffect } from '../utils/theme/style';

const ATMLocator = (props) => {
  const navigate = useNavigation();
  return (
    <View flex={1}>
      <Pressable
        style={{
          top: 30,
          left: 25,
          position: 'absolute',
          zIndex: 10,
        }}
        onPress={() => navigate.goBack()}
      >
        <XCircle size={52} color="#000" />
      </Pressable>
      <View flex={1} rounded={'full'} shadow={6} borderRadius={'full'}
      >
        <MapView
          style={{ flex: 1}}
          initialRegion={{
            latitude: props.route.params.coords.latitude,
            longitude: props.route.params.coords.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}
        />
      </View>
      <VStack alignItems="center" justifyContent="center" space={6} width='full' padding={10}>
        <Text color={'primary.100'} fontWeight={'bold'} fontSize={'3xl'} textTransform={'uppercase'}>Localizar</Text>
        <Text textAlign={'center'} fontSize={'lg'} fontWeight={'light'}>
          Localize o posto mais proximo se si para realizar operações bancarias{' '}
        </Text>
        <VStack space={6} width='full'  >
          <Button
            android_ripple={androidRippleEffect}
            _pressed={{ bg: 'primary.100' }}
            bg="primary.100"
            rounded="xl"
            shadow={6}
            _text={{
              fontFamily: 'body',
              fontSize: 'lg',
              fontWeight: 'bold',
            }}
          >
            Depositar
          </Button>
          <Button
            android_ripple={androidRippleEffect}
            _pressed={{ bg: 'primary.100' }}
            bg="primary.100"
            rounded="xl"
            shadow={6}
            _text={{
              fontFamily: 'body',
              fontSize: 'lg',
              fontWeight: 'bold',
            }}
          >
            Levantamento
          </Button>
        </VStack>
      </VStack>
    </View>
  );
};

export default ATMLocator;
