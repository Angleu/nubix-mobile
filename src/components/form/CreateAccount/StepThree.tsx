import * as Location from 'expo-location';
import { Button, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { androidRippleEffect } from '../../../utils/theme/style';
import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import Input from './inputs/Input';

const StepThree = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [hasError, setError] = useState(false);

  async function getDeviceLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setError(true);
      return;
    }
    setError(false);
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});
    setLocation({ latitude, longitude });
  }

  const {
    control,
    formState: { errors },
  } = useFormContext<SignUpFormType>();
  return (
    <VStack>
      <Controller
        name="address.country"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.address &&
              errors.address.country &&
              errors.address.country.message
            }
            label="País"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="address.province"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.address &&
              errors.address.province &&
              errors.address.province.message
            }
            label="Província"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="address.neighbor"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.address &&
              errors.address.neighbor &&
              errors.address.neighbor.message
            }
            label="Bairro / Distrito"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        name="address.district"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.address &&
              errors.address.district &&
              errors.address.district.message
            }
            label="Município / Distrito"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {hasError ? (
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
          variant="primary"
          bg="primary.100"
          _text={{ color: 'white' }}
          android_ripple={androidRippleEffect}
          onPress={getDeviceLocation}
        >
          Buscar Coordenadas Geográficas
        </Button>
      ) : (
        <Text textAlign="center" fontWeight="bold" color="primary.100">
          Coordenadas buscadas com sucesso!
        </Text>
      )}
    </VStack>
  );
};

export default StepThree;
