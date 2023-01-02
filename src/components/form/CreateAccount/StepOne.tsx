import { VStack } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import Input from './Input';

const StepOne = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignUpFormType>();
  return (
    <VStack>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={errors.email && errors.email.message}
            label="E-mail"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={errors.phoneNumber && errors.phoneNumber.message}
            label="Telefone"
            value={value}
            onChangeText={onChange}
            keyboardType="phone-pad"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={errors.password && errors.password.message}
            label="Password"
            value={value}
            onChangeText={onChange}
            secureText
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.confirmPassword && errors.confirmPassword.message
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
