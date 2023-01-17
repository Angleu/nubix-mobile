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

import Input from '../../components/form/inputs/Input';
import Container from '../../components/layout/Container';
import SignUpStepCount from '../../components/layout/SignUpStepCount';
import { AuthStackScreenProps } from '../../routes/types';
import { androidRippleEffect } from '../../utils/theme/style';
import {
  CredentialSchemaType,
  credentialsSchema,
} from '../../utils/validation/signUpSchema';

const SignUpStepOne: FC<AuthStackScreenProps<'SignUpStepOne'>> = ({
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<CredentialSchemaType>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
    mode: 'onChange',
  });

  async function handleGoNextStep(formData: CredentialSchemaType) {
    console.log(formData);
    navigation.navigate('SignUpStepTwo');
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
        <SignUpStepCount numberOfSteps={3} currentStepIndex={0} />
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
          Dados de Credenciais
        </Text>

        <VStack>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="E-mail"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="email-address"
                placeholder="example@email.com"
                errorMessage={errors?.email?.message}
              />
            )}
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Telefone"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="phone-pad"
                placeholder="9XXXXXXXX"
                errorMessage={errors?.phoneNumber?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Password"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureText
                errorMessage={errors?.password?.message}
              />
            )}
          />

          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                label="Confirme a Password"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                secureText
                errorMessage={errors?.confirmPassword?.message}
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

export default SignUpStepOne;
