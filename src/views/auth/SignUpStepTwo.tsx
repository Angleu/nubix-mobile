import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { subYears } from 'date-fns';
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

import { createUserWithPersonalData } from '../../api/user';
import BirthDateInput from '../../components/form/inputs/BirthDateInput';
import GenderSelect from '../../components/form/inputs/GenderSelect';
import ImageSubmit from '../../components/form/inputs/ImageSubmit';
import Input from '../../components/form/inputs/Input';
import Container from '../../components/layout/Container';
import SignUpStepCount from '../../components/layout/SignUpStepCount';
import { AuthStackScreenProps } from '../../routes/types';
import { androidRippleEffect } from '../../utils/theme/style';
import {
  personalInfoSchema,
  PersonalInfoSchemaType,
} from '../../utils/validation/signUpSchema';

const SignUpStepTwo: FC<AuthStackScreenProps<'SignUpStepTwo'>> = ({
  navigation,
  route,
}) => {
  const { email } = route.params;
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<PersonalInfoSchemaType>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      profilePicture: '',
      firstName: '',
      lastName: '',
      nif: '',
      occupation: '',
      birthDate: subYears(new Date(), 17),
    },
    mode: 'onChange',
  });

  async function handleGoNextStep(formData: PersonalInfoSchemaType) {
    const { nif, firstName, lastName, gender, birthDate } = formData;
    try {
      await createUserWithPersonalData({
        NIF: nif,
        name: firstName,
        middleName: '',
        surname: lastName,
        email,
        sex: gender,
        birth_day: birthDate.toISOString(),
      });
      navigation.navigate('SignUpStepThree', {
        email,
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
        <SignUpStepCount numberOfSteps={3} currentStepIndex={1} />
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
          Dados Pessoais
        </Text>

        <VStack>
          <ImageSubmit
            onImageChange={(imageUri) => setValue('profilePicture', imageUri)}
          />

          <Controller
            name="nif"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="NIF"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors?.nif?.message}
              />
            )}
          />

          <Controller
            name="firstName"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Primeiro Nome"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors?.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Último Nome"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors?.lastName?.message}
              />
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <GenderSelect
                value={value}
                onChange={onChange}
                errorMessage={errors?.nif?.message}
              />
            )}
          />

          <Controller
            name="occupation"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Ocupação"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                errorMessage={errors?.occupation?.message}
              />
            )}
          />

          <Controller
            name="birthDate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <BirthDateInput
                value={value}
                onChange={onChange}
                errorMessage={errors?.birthDate?.message}
              />
            )}
          />
        </VStack>

        <Button
          isDisabled={!isValid || !isDirty}
          isLoading={isSubmitting}
          mb="4"
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
          }}
          onPress={handleSubmit(handleGoNextStep)}
        >
          Continuar
        </Button>
      </ScrollView>
    </Container>
  );
};

export default SignUpStepTwo;
