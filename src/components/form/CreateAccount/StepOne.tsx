import { VStack } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import Input from './inputs/Input';

const StepOne = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignUpFormType>();
  return (
    <VStack>
      <Controller
        name="stepOne.email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.stepOne &&
              errors.stepOne.email &&
              errors.stepOne.email.message
            }
            label="E-mail"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        name="stepOne.phoneNumber"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.stepOne &&
              errors.stepOne.phoneNumber &&
              errors.stepOne.phoneNumber.message
            }
            label="Telefone"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
          />
        )}
      />

      <Controller
        name="stepOne.password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.stepOne &&
              errors.stepOne.password &&
              errors.stepOne.password.message
            }
            label="Password"
            value={value}
            onChangeText={onChange}
            secureText
          />
        )}
      />

      <Controller
        name="stepOne.confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.stepOne &&
              errors.stepOne.confirmPassword &&
              errors.stepOne.confirmPassword.message
            }
            label="Confirme a Password"
            value={value}
            onChangeText={onChange}
            secureText
          />
        )}
      />
    </VStack>
  );
};

export default StepOne;
