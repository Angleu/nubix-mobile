import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import iban from 'iban';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useToast,
  VStack
} from 'native-base';
import React, { FC } from 'react';
import { Share } from 'react-native';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { useUser } from '../../hooks';
import { MainStackScreenProps } from '../../routes/types';
import { createShareableAccountDetails } from '../../utils/formatter';
import { androidRippleEffect } from '../../utils/theme/style';

const DepositProviderBank: FC<MainStackScreenProps<'DepositProviderBank'>> = ({
  route,
}) => {
  const { accountToReceive } = route.params;
  const { firstName, lastName } = useUser().user;
  const toast = useToast();

  const fullName = `${firstName} ${lastName}`;
  const formattedIban = iban.printFormat(accountToReceive.IBAN);

  async function copyToClipboard(value: string) {
    await Clipboard.setStringAsync(value);
    toast.show({
      description: "Valor copiado",
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
                message: createShareableAccountDetails(fullName, formattedIban),
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
      <VStack bg="muted.200" p="6" borderRadius="2xl" space="4">
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space="2">
            <Text fontWeight="bold">Beneficiário</Text>
            <Text color="primary.100">{fullName}</Text>
          </VStack>
          <IconButton
            borderRadius="full"
            variant="ghost"
            android_ripple={androidRippleEffect}
            _pressed={{
              bg: 'muted.100',
            }}
            _icon={{ color: 'primary.100' }}
            onPress={() => copyToClipboard(fullName)}
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
    </Container>
  );
};

export default DepositProviderBank;
