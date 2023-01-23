import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import * as DocumentPicker from 'expo-document-picker';
import iban from 'iban';
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useToast,
  VStack,
} from 'native-base';
import React, { FC, useState } from 'react';
import { Alert, Share } from 'react-native';
import { useMutation } from 'react-query';

import { deposit, saveReceipt } from '../../api/account';
import Select from '../../components/form/inputs/Select';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';
import banks from '../../utils/constants/banks';
import nubixAccount from '../../utils/constants/nubixAccount';
import {
  createShareableAccountDetails,
  formatMoney,
} from '../../utils/formatter';
import { androidRippleEffect } from '../../utils/theme/style';

const DepositProviderBank: FC<MainStackScreenProps<'DepositProviderBank'>> = ({
  route,
  navigation,
}) => {
  const toast = useToast();
  const {
    accountToReceive: { number_account },
  } = route.params;
  const [selectedBank, setSelectedBank] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [amount, setAmount] = useState(0);

  const depositMutation = useMutation(() =>
    deposit(number_account, { amount, currency: 'AOA' })
  );

  const beneficiary = nubixAccount.beneficiary;
  const formattedIban = iban.printFormat(nubixAccount.IBAN);

  async function copyToClipboard(value: string) {
    await Clipboard.setStringAsync(value);
    toast.show({
      description: 'Valor copiado',
    });
  }

  async function handleDocumentSelection() {
    setIsSubmitting(true);
    try {
      const doc = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });
      const { montante } = await saveReceipt(doc.uri);
      const money = montante
        .replace(/\.|,|Kz/g, '')
        .trim()
        .replace(/\d{2}$/g, '');
      console.log('kkkk');
      setAmount(Number(money));
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      Alert.alert('Erro ao enviar o comprovativo');
    }
    setIsSubmitting(false);
  }

  async function handleDeposit() {
    depositMutation
      .mutateAsync()
      .then(() => {
        Alert.alert('Depósito Efetuado', 'O depósito foi efetuado com sucesso');
        navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HomeTab',
            },
          ],
        });
      })
      .catch(() => {
        Alert.alert('Erro ao efetuar o depósito');
        navigation.goBack();
      });
  }

  return (
    <Container>
      <Header heading="Depósito" />

      <Heading fontSize="2xl" mt="2">
        Transferência Bancária
      </Heading>

      <HStack mt="12" mb="4" justifyContent="space-between">
        <Text fontSize="md">Detalhes da conta</Text>
        <Button
          onPress={() =>
            Share.share(
              {
                title: 'Detalhes da Conta',
                message: createShareableAccountDetails(
                  beneficiary,
                  formattedIban
                ),
              },
              { dialogTitle: 'Detalhes da Conta' }
            )
          }
          variant="link"
          p="0"
          _text={{ fontSize: 'md', color: 'primary.100', fontWeight: 'bold' }}
        >
          Partilhar
        </Button>
      </HStack>
      <VStack bg="muted.200" p="6" borderRadius="2xl" space="4" mb="10">
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space="2">
            <Text fontWeight="bold">Beneficiário</Text>
            <Text color="primary.100">{beneficiary}</Text>
          </VStack>
          <IconButton
            borderRadius="full"
            variant="ghost"
            android_ripple={androidRippleEffect}
            _pressed={{
              bg: 'muted.100',
            }}
            _icon={{ color: 'primary.100' }}
            onPress={() => copyToClipboard(beneficiary)}
            icon={<Icon as={MaterialCommunityIcons} name="content-copy" />}
          />
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space="2">
            <Text fontWeight="bold">IBAN</Text>
            <Text color="primary.100">{formattedIban}</Text>
          </VStack>
          <IconButton
            borderRadius="full"
            variant="ghost"
            android_ripple={androidRippleEffect}
            _pressed={{
              bg: 'muted.100',
            }}
            _icon={{ color: 'primary.100' }}
            onPress={() => copyToClipboard(formattedIban)}
            icon={<Icon as={MaterialCommunityIcons} name="content-copy" />}
          />
        </HStack>
      </VStack>

      {success ? (
        <Center mt="4" flex={1}>
          <Heading fontSize="xl" textAlign="center">
            Comprovativo enviado com sucesso
          </Heading>
          <HStack>
            <Text fontSize="lg">Valor a Receber: </Text>
            <Text fontSize="lg" color="primary.100">
              {formatMoney(amount * 100, 'Kzs')}
            </Text>
          </HStack>
        </Center>
      ) : (
        <>
          <Select
            options={banks}
            onChange={setSelectedBank}
            value={selectedBank}
            label="Origem do Comprovativo"
          />
          <Button
            isLoading={isSubmitting}
            mt="4"
            variant="link"
            _text={{
              color: 'primary.100',
              fontSize: 'md',
            }}
            onPress={handleDocumentSelection}
          >
            Submeter o Comprovativo
          </Button>
        </>
      )}
      <VStack flex={1} justifyContent="flex-end" mb="6">
        <Button
          onPress={handleDeposit}
          isDisabled={selectedBank === '' && !success}
          isLoading={isSubmitting || depositMutation.isLoading}
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
            opacity: 90,
          }}
        >
          Continuar
        </Button>
      </VStack>
    </Container>
  );
};

export default DepositProviderBank;
