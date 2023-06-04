import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Heading, Skeleton, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { getAccount } from '../../api/account';
import Input from '../../components/form/inputs/Input';
import Select, { SelectOptionType } from '../../components/form/inputs/Select';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';
import { formatMoney } from '../../utils/formatter';
import { androidRippleEffect } from '../../utils/theme/style';
import {
  AddMoneyFormType,
  addMoneySchema,
} from '../../utils/validation/depositSchema';

const Deposit: FC<MainStackScreenProps<'Deposit'>> = ({
  navigation,
  route,
}) => {
  const { accountToReceive } = route.params;
  const { IBAN } = accountToReceive;

  const { isLoading, data: account } = useQuery(['balance', IBAN], () =>
    getAccount(IBAN)
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<AddMoneyFormType>({
    resolver: zodResolver(addMoneySchema),
  });

  const currencyOptions: SelectOptionType[] = [
    {
      value: 'USD',
      label: 'USD - Dólar Norte Americano',
    },
    {
      value: 'AOA',
      label: 'Kz - Kwanza',
    },
  ];

  function onSubmit({ amount, currency }: AddMoneyFormType) {
    navigation.navigate('DepositProvider', {
      amount,
      currency,
      accountToReceive,
    });
  }

  return (
    <Container>
      <Header heading="Depósito" />

      <Heading fontSize="3xl" mt="2" textAlign={'center'}>
        Adicionar Dinheiro
      </Heading>

      <Text mt="8" fontSize="2xl"> 
        Saldo Disponível
      </Text>
      {isLoading ? (
        <Skeleton.Text />
      ) : (
        <Text mb="8" fontSize="xl" color="primary.100">
          {formatMoney(account.balance, account.coin === 'AOA' ? 'Kzs' : '$')}
        </Text>
      )}

      <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, value, onBlur } }) => (
          <Input
            label="Valor a adicionar"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType="decimal-pad"
            errorMessage={errors?.amount?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="currency"
        render={({ field: { onChange, value } }) => (
          <Select
            label="Moeda"
            value={value}
            onChange={onChange}
            options={currencyOptions}
            errorMessage={errors?.amount?.message}
          />
        )}
      />

      <VStack flex={1} justifyContent="flex-end" mb="6">
        <Button
          isDisabled={!isValid || !isDirty}
          isLoading={isSubmitting}
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
            opacity: 90,
          }}
          onPress={handleSubmit(onSubmit)}
        >
          Continuar
        </Button>
      </VStack>
    </Container>
  );
};

export default Deposit;
