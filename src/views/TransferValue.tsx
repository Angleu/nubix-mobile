import { Button, Center, ScrollView, Text, VStack } from 'native-base';
import React, { useState } from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import NumberPad from '../components/layout/NumberPad';
import { TransferDescriptionBottomSheet } from '../components/modal';
import { useBottomSheetModal } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { androidRippleEffect, textShadowStyle } from '../utils/theme/style';

const TransferValue = ({
  navigation: { navigate },
  route,
}: MainStackScreenProps<'TransferValue'>) => {
  const { destination } = route.params;

  const [amount, setAmount] = useState('0');
  const [description, setDescription] = useState('');
  const { reference, showModal } = useBottomSheetModal();

  const onConfirm = () => {
    navigate('TransferConfirmation', {
      destination,
      transferAmount: amount,
      message: description,
    });
  };

  function setTransferAmount(value: string) {
    setAmount((prev) =>
      value === 'del' ? prev.slice(0, prev.length - 1) : prev + value
    );
  }

  return (
    <>
      <Container>
        <Header heading="Transferência" />
        <ScrollView>
          <Center mt={11} mb={12}>
            <Text
              mb={6}
              fontFamily="body"
              fontWeight="medium"
              fontSize="xl"
              color="primary.100"
            >
              Valor a Transferir
            </Text>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="4xl"
              color="primary.100"
              style={textShadowStyle}
            >
              {formatMoney(amount, 'Kzs')}
            </Text>
          </Center>

          <NumberPad
            onPress={setTransferAmount}
            onLongPressDelete={() => setAmount('0')}
          />

          <VStack mt={12} pb={2} space={4}>
            <Button
              onPress={showModal}
              variant="link"
              _text={{
                fontFamily: 'body',
                fontWeight: 'bold',
                fontSize: 'sm',
                color: 'primary.100',
              }}
            >
              Adicionar Descrição
            </Button>
            <Button
              onPress={onConfirm}
              android_ripple={androidRippleEffect}
              _pressed={{ bg: 'white' }}
              bgColor="primary.100"
              rounded="xl"
              shadow={3}
              _text={{
                fontFamily: 'body',
                fontWeight: 'bold',
                fontSize: 'lg',
                color: 'white',
              }}
            >
              Confirmar
            </Button>
          </VStack>
        </ScrollView>
      </Container>
      <TransferDescriptionBottomSheet
        onConfirm={setDescription}
        reference={reference}
      />
    </>
  );
};

export default TransferValue;
