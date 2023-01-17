import * as Location from 'expo-location';
import { Button, Text } from 'native-base';
import React, { FC, useState } from 'react';

import { androidRippleEffect } from '../../../utils/theme/style';

type Props = {
  onRetrievedCoordinates: (coordinates: CoordinatesType) => void;
};

type CoordinatesType = {
  latitude: number;
  longitude: number;
};

const Geolocation: FC<Props> = ({ onRetrievedCoordinates }) => {
  const [location, setLocation] = useState<CoordinatesType | null>(null);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  async function getDeviceLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError(true);
      return;
    }
    setLoading(true);
    setError(false);
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({ latitude, longitude });
    onRetrievedCoordinates({ latitude, longitude });
    setLoading(false);
  }

  return hasError ? (
    <>
      <Text textAlign="center" fontWeight="bold">
        Não foi possível obter a localização
      </Text>
      <Text textAlign="center">
        Verifique se a aplicação tem permissão para aceder a localização
      </Text>
    </>
  ) : !location ? (
    <Button
      isLoading={isLoading}
      variant="outline"
      py="3"
      borderColor="primary.100"
      borderWidth="1"
      borderRadius="lg"
      android_ripple={androidRippleEffect}
      _pressed={{
        bg: 'light.50',
        opacity: 80,
      }}
      _text={{ color: 'primary.100' }}
      onPress={getDeviceLocation}
    >
      Buscar Coordenadas Geográficas
    </Button>
  ) : (
    <Text textAlign="center" fontWeight="bold" color="primary.100">
      Coordenadas buscadas com sucesso!
    </Text>
  );
};

export default Geolocation;
