import { MaterialIcons } from '@expo/vector-icons';
import {
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';

import NumberButton from '../components/button/NumberButton';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { TransferDescriptionBottomSheet } from '../components/modal';
import { useBottomSheetModal } from '../hooks/useBottomSheetModal';
import { MainStackScreenProps } from '../routes/types';

type KeyHandlerActionsType =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '0'
  | '.'
  | 'del';

const TransferValue = ({
  navigation: { navigate },
  route,
}: MainStackScreenProps<'TransferValue'>) => {
  const { destination } = route.params;

  const { reference, showModal } = useBottomSheetModal();

  const [valueToTransfer, setValueToTransfer] = useState<
    KeyHandlerActionsType[]
  >(['0']);
  const [description, setDescription] = useState('');

  const handleValueToTransferChange = (value: KeyHandlerActionsType) => {
    switch (value) {
      case 'del':
        if (valueToTransfer.length > 1)
          setValueToTransfer((old) => old.slice(0, -1));
        else setValueToTransfer(['0']);
        break;
      case '.':
        if (!valueToTransfer.includes('.'))
          setValueToTransfer((old) => [...old, '.']);
        break;
      default:
        if (/\.\d{2}$/g.test(valueToTransfer.join(''))) break;
        if (valueToTransfer.length !== 1 || valueToTransfer[0] !== '0')
          setValueToTransfer((old) => [...old, value]);
        else setValueToTransfer([value]);
        break;
    }
  };

  const clearValue = () => setValueToTransfer(['0']);

  const onConfirm = () => {
    const transferAmount = '$' + valueToTransfer.join('');
    navigate('TransferConfirmation', {
      destination,
      transferAmount,
      message: description,
    });
  };

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
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: { width: 0, height: 4 },
                textShadowRadius: 10,
              }}
            >
              $ {valueToTransfer.join('')}
            </Text>
          </Center>
          <VStack space={3} px={10}>
            <HStack space={9}>
              <NumberButton onPress={() => handleValueToTransferChange('1')}>
                1
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('2')}>
                2
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('3')}>
                3
              </NumberButton>
            </HStack>
            <HStack space={9}>
              <NumberButton onPress={() => handleValueToTransferChange('4')}>
                4
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('5')}>
                5
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('6')}>
                6
              </NumberButton>
            </HStack>
            <HStack space={9}>
              <NumberButton onPress={() => handleValueToTransferChange('7')}>
                7
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('8')}>
                8
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('9')}>
                9
              </NumberButton>
            </HStack>
            <HStack space={9}>
              <NumberButton onPress={() => handleValueToTransferChange('.')}>
                .
              </NumberButton>
              <NumberButton onPress={() => handleValueToTransferChange('0')}>
                0
              </NumberButton>
              <NumberButton
                isDelete
                onPress={() => handleValueToTransferChange('del')}
                onLongPress={clearValue}
              >
                <Icon
                  as={<MaterialIcons />}
                  name="backspace"
                  color="danger.700"
                  size="xl"
                />
              </NumberButton>
            </HStack>
          </VStack>

          <VStack mt={12} mb={16} pb={2} space={4}>
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
              bgColor="primary.100"
              rounded="xl"
              shadow={3}
              android_ripple={{
                color: '#fff4',
              }}
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