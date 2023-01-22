import { FormControl, Select as NSelect, Text } from 'native-base';
import React, { FC } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
  options: SelectOptionType[];
  label: string;
  placeholder?: string;
};

export type SelectOptionType = {
  value: string;
  label: string;
};

const Select: FC<Props> = ({
  onChange,
  value,
  errorMessage,
  options,
  label,
  placeholder,
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormControl.Label>
        <Text fontSize="sm" color="light.500">
          {label}
        </Text>
      </FormControl.Label>
      <NSelect
        onValueChange={onChange}
        selectedValue={value}
        placeholder={placeholder}
        _ios={{
          py: '4',
        }}
        fontSize="md"
      >
        {options.map(({ value, label }) => (
          <NSelect.Item key={value} value={value} label={label} />
        ))}
      </NSelect>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Select;
