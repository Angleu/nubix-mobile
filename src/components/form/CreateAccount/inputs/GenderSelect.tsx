import { FormControl, Select, Text } from 'native-base';
import React from 'react';

const GenderSelect = () => {
  return (
    <FormControl>
      <FormControl.Label>
        <Text fontSize="sm" color="light.500">
          Género
        </Text>
      </FormControl.Label>
      <Select
        placeholder="Selecione o seu género"
        mb="4"
        _ios={{
          py: '4',
        }}
        fontSize="md"
      >
        <Select.Item value="male" label="Masculino" />
        <Select.Item value="female" label="Feminino" />
        <Select.Item value="other" label="Outro" />
      </Select>
    </FormControl>
  );
};

export default GenderSelect;
