import { VStack } from 'native-base';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { SignUpFormType } from '../../../utils/validation/signUpSchema';
import Input from './inputs/Input';

const StepThree = () => {
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

      {/* TODO: Add coordinates data capture */}
    </VStack>
  );
};

export default StepThree;
