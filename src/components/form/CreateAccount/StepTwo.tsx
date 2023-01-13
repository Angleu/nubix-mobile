import { VStack } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import BirthDateInput from './inputs/BirthDateInput';
import GenderSelect from './inputs/GenderSelect';
import ImageSubmit from './inputs/ImageSubmit';
import Input from './inputs/Input';

const StepTwo = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext<SignUpFormType>();

  return (
    <VStack>
      <ImageSubmit
        onImageChange={(imageUri) =>
          setValue('personalInfo.profilePicture', imageUri)
        }
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

          />
        )}
      />

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
        name="personalInfo.gender"
        control={control}
        render={({ field: { onChange, value } }) => (
          <GenderSelect
            value={value}
            onChange={onChange}
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.gender &&
              errors.personalInfo.gender.message
            }
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

      <Controller
        name="personalInfo.birthDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <BirthDateInput
            value={value}
            onChange={onChange}
            errorMessage={
              errors.personalInfo &&
              errors.personalInfo.birthDate &&
              errors.personalInfo.birthDate.message
            }
          />
        )}
      />
    </VStack>
  );
};

export default StepTwo;
