import { MaterialIcons } from '@expo/vector-icons';
import { Center, Icon, IconButton, Text } from 'native-base';
import React from 'react';

import ContactsSearch from '../../components/ContactsSearch';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { TransferScreenProps } from '../../constants/routes';
import { userLoggedIn } from '../../utils/mocks/users';

export default function Transfer({
  navigation: { navigate },
}: TransferScreenProps) {
  return (
    <Container>
      <Header
        heading="Transferência"
        LeftIcon={
          <IconButton
            icon={<Icon as={<MaterialIcons name="qr-code" />} />}
            _icon={{
              color: '_primary.500',
              size: '4xl',
            }}
            onPress={() => {
              navigate('scannerQr');
            }}
          />
        }
      />

      <Center my={8}>
        <Text
          fontFamily="body"
          fontWeight="medium"
          color="_primary.500"
          fontSize="2xl"
          mb={6}
        >
          Balanço Total
        </Text>
        <Text
          fontFamily="body"
          color="_primary.500"
          fontWeight="bold"
          fontSize="xl"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          {userLoggedIn.accounts[0].balance} Kzs
        </Text>
      </Center>

      <ContactsSearch />
    </Container>
  );
}
