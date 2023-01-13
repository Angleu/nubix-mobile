import { FormControl, Input as NInput, Text } from 'native-base';
import React, { FC } from 'react';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  errorMessage?: string;
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const Input: FC<Props> = ({
  label,
  errorMessage,
  value,
  onChangeText,
  secureText = false,
  keyboardType = 'default',
  placeholder = '',
  disabled = false,
}) => {
  return (
    <FormControl isInvalid={!!errorMessage} mb="4">
      <FormControl.Label>
        <Text fontSize="sm" color="light.500">
          {label}
        </Text>
      </FormControl.Label>
      <NInput
        _ios={{
          py: '3',
        }}
        _focus={{
          bg: 'white',
          borderColor: 'primary.100',
        }}
        fontSize="md"
        isDisabled={disabled}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={keyboardType === 'email-address' ? 'none' : 'words'}
        cursorColor="primary.100"
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
