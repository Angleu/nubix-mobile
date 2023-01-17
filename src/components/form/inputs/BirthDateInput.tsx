import DateTimePicker from '@react-native-community/datetimepicker';
import { subYears } from 'date-fns';
import { Button, FormControl, HStack, Text } from 'native-base';
import React, { FC, useState } from 'react';
import { Platform } from 'react-native';

import { colorPallet } from '../../../utils/theme';

type Props = {
  value: Date;
  onChange: (value: Date) => void;
  errorMessage?: string;
};

const BirthDateInput: FC<Props> = ({ errorMessage, onChange, value }) => {
  const maximumDate = subYears(new Date(), 18);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <FormControl mb="6">
      <FormControl.Label>
        <Text>Data de Nascimento</Text>
      </FormControl.Label>
      {Platform.OS === 'ios' && (
        <DateTimePicker
          value={value}
          onChange={(_, date) => onChange(date)}
          accentColor={colorPallet.primary[100]}
          mode="date"
          maximumDate={maximumDate}
        />
      )}
      {Platform.OS === 'android' && showDatePicker ? (
        <DateTimePicker
          negativeButtonLabel="Cancelar"
          value={value}
          onChange={(_, date) => {
            onChange(date);
            setShowDatePicker(false);
          }}
          mode="date"
          maximumDate={maximumDate}
        />
      ) : (
        Platform.OS === 'android' && (
          <HStack justifyContent="space-between" alignItems="center" my="2">
            <Button
              p="0"
              variant="link"
              _text={{
                color: 'primary.100',
                fontSize: 'md',
              }}
              onPress={() => setShowDatePicker(true)}
            >
              Selecionar Data
            </Button>
            <Text textAlign="center" fontSize="md" fontFamily="body">
              {value
                ? new Date(value).toLocaleDateString()
                : new Date().toLocaleDateString()}
            </Text>
          </HStack>
        )
      )}
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default BirthDateInput;
