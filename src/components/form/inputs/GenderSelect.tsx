import { FormControl, Select, Text } from 'native-base';
import React, { FC } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
};

const GenderSelect: FC<Props> = ({ onChange, value, errorMessage }) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormControl.Label>
        <Text fontSize="sm" color="light.500">
          Género
        </Text>
      </FormControl.Label>
      <Select
        onValueChange={onChange}
        selectedValue={value}
        placeholder="Selecione o seu género"
        _ios={{
          py: '4',
        }}
        fontSize="md"
      >
        <Select.Item value="male" label="Masculino" />
        <Select.Item value="female" label="Feminino" />
        <Select.Item value="other" label="Outro" />
      </Select>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default GenderSelect;
