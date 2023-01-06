import { VStack } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import ImageSubmit from './ImageSubmit';
import Input from './Input';

const StepTwo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<SignUpFormType>();
  return (
    <VStack>
      <ImageSubmit onImageChange={() => console.log('Image updated')} />

      <Controller
        name="personalInfo.firstName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.firstName &&
              errors.personalInfo.firstName.message
            }
            label="Primeiro Nome"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="personalInfo.lastName"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.lastName &&
              errors.personalInfo.lastName.message
            }
            label="Último Nome"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="personalInfo.nif"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.nif &&
              errors.personalInfo.nif.message
            }
            label="NIF"
            value={value}
            onChangeText={onChange}
            keyboardType="number-pad"
          />
        )}
      />

      <Controller
        name="personalInfo.occupation"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.occupation &&
              errors.personalInfo.occupation.message
            }
            label="Ocupação"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
    </VStack>
  );
};

export default StepTwo;
