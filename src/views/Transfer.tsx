import { MaterialIcons } from '@expo/vector-icons';
import { Center, Icon, IconButton, Text } from 'native-base';
import React from 'react';

import ContactsSearch from '../components/ContactsSearch';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';

export default function Transfer({
  navigation: { navigate },
}: MainStackScreenProps<'Transfer'>) {
  const { accounts } = useUser().user;

  return (
    <Container>
      <Header
        heading="Transferência"
        RightIcon={
          <IconButton
            borderRadius="full"
            _pressed={{
              bg: 'light.50',
            }}
            icon={<Icon as={<MaterialIcons name="qr-code" />} />}
            _icon={{
              color: 'primary.100',
              size: '4xl',
            }}
            onPress={() => navigate('QRScanner')}
          />
        }
      />

      <Center my={8}>
        <Text
          fontFamily="body"
          fontWeight="medium"
          color="primary.100"
          fontSize="2xl"
          mb={6}
        >
          Balanço Total
        </Text>
        <Text
          fontFamily="body"
          color="primary.100"
          fontWeight="bold"
          fontSize="xl"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          {formatMoney(
            accounts[0].balance,
            accounts[0].coin === 'AOA' ? 'Kzs' : '$'
          )}
        </Text>
      </Center>

      <ContactsSearch />
    </Container>
  );
}
