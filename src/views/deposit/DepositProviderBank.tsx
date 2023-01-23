import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, { FC } from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { useUser } from '../../hooks';
import { MainStackScreenProps } from '../../routes/types';
import { androidRippleEffect } from '../../utils/theme/style';

const DepositProviderBank: FC<MainStackScreenProps<'DepositProviderBank'>> = ({
  route,
}) => {
  const { accountToReceive } = route.params;
  const { firstName, lastName } = useUser().user;
  return (
    <Container>
      <Header heading="Deposito" />

      <Heading fontSize="2xl" mt="2">
        Transferência Bancária
      </Heading>

      <HStack mt="12" mb="4" justifyContent="space-between">
        <Text fontSize="md">Detalhes da conta</Text>
        <Button
          onPress={() => {}}
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
            <Text color="primary.100">{`${firstName} ${lastName}`}</Text>
          </VStack>
          <IconButton
            borderRadius="full"
            variant="ghost"
            android_ripple={androidRippleEffect}
            _pressed={{
              bg: 'muted.100',
            }}
            _icon={{ color: 'primary.100' }}
            onPress={() => {}}
            icon={<Icon as={MaterialCommunityIcons} name="content-copy" />}
          />
        </HStack>
        <Divider />
        <HStack justifyContent="space-between" alignItems="center">
          <VStack space="2">
            <Text fontWeight="bold">IBAN</Text>
            <Text color="primary.100">{accountToReceive.IBAN}</Text>
          </VStack>
          <IconButton
            borderRadius="full"
            variant="ghost"
            android_ripple={androidRippleEffect}
            _pressed={{
              bg: 'muted.100',
            }}
            _icon={{ color: 'primary.100' }}
            onPress={() => {}}
            icon={<Icon as={MaterialCommunityIcons} name="content-copy" />}
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default DepositProviderBank;
