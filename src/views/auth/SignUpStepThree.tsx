import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { createAccount } from '../../api/account';
import { createAddress } from '../../api/address';
import Geolocation from '../../components/form/inputs/Geolocation';
import Input from '../../components/form/inputs/Input';
import Select from '../../components/form/inputs/Select';
import Container from '../../components/layout/Container';
import SignUpStepCount from '../../components/layout/SignUpStepCount';
import { AuthStackScreenProps } from '../../routes/types';
import { mapToSelectList } from '../../utils/constants/angolaSubdivisions';
import { androidRippleEffect } from '../../utils/theme/style';
import {
  addressSchema,
  AddressSchemaType,
} from '../../utils/validation/signUpSchema';

const SignUpStepThree: FC<AuthStackScreenProps<'SignUpStepThree'>> = ({
  navigation,
  route,
}) => {
  const { email, phoneNumber } = route.params;
  const provinces = mapToSelectList();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<AddressSchemaType>({
    resolver: zodResolver(addressSchema),
    mode: 'onChange',
  });

  async function finalizeResister(formData: AddressSchemaType) {
    if (!formData.coordinates) {
      Alert.alert(
        'Ausência de Dados Geográficos',
        'É necessário obter as coordenadas geográficas para habilitar os serviços da aplicação'
      );
      return;
    }
    const { coordinates, province, address } = formData;
    try {
      await createAddress({
        city: province,
        country: 'Angola',
        address,
        latitude: coordinates.latitude.toString(),
        longitude: coordinates.longitude.toString(),
        email,
      });
      await createAccount({ email, numberPhone: phoneNumber });
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
            params: {
              signUpSuccess: true,
            },
          },
        ],
      });
    } catch (error) {
      Alert.alert('Erro na criação de conta', error.message);
    }
  }

  return (
    <Container>
      <HStack>
        <IconButton
          borderRadius="full"
          _pressed={{
            bg: 'light.50',
          }}
          icon={<Icon as={<Ionicons name="arrow-back-circle-outline" />} />}
          _icon={{
            color: 'dark.50',
            size: '4xl',
          }}
          onPress={() => navigation.goBack()}
        />
      </HStack>
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <SignUpStepCount numberOfSteps={3} currentStepIndex={2} />
        <Heading
          textAlign="center"
          textTransform="uppercase"
          fontFamily="heading"
          fontSize="2xl"
          color="primary.100"
        >
          Criar Conta
        </Heading>

        <Text
          textAlign="center"
          fontFamily="body"
          fontSize="lg"
          color="primary.100"
          mb="6"
        >
          Dados de Residência
        </Text>

        <VStack>
          <Geolocation
            onRetrievedCoordinates={({ latitude, longitude }) => {
              setValue('coordinates.latitude', latitude);
              setValue('coordinates.longitude', longitude);
            }}
          />

          {/* <Controller
            name="country"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                onBlur={onBlur}
                errorMessage={errors?.country?.message}
                label="País"
                value={value}
                onChangeText={onChange}
              />
            )}
          /> */}

          <Controller
            name="province"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                errorMessage={errors?.province?.message}
                label="Província"
                value={value}
                onChange={onChange}
                options={provinces}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                onBlur={onBlur}
                placeholder="Coloque o seu distrito/município/bairro"
                errorMessage={errors?.address?.message}
                label="Endereço"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </VStack>

        <Button
          isDisabled={!isValid || !isDirty}
          isLoading={isSubmitting}
          my="4"
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
          }}
          onPress={handleSubmit(finalizeResister)}
        >
          Terminar
        </Button>
      </ScrollView>
    </Container>
  );
};

export default SignUpStepThree;
