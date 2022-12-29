import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { userLoggedIn } from '../utils/mocks/users';

const Payment = ({ navigation }: MainStackScreenProps<'Payment'>) => {
  return (
    <Container>
      <Header heading="Pagamento" />
      <Box
        mt={12}
        bg="primary.50"
        px="10"
        py="8"
        h="40"
        rounded="3xl"
        shadow="8"
      >
        <HStack justifyContent="space-between" mb={8}>
          <VStack>
            <Text
              fontFamily="body"
              color="white"
              fontSize="sm"
              fontWeight="medium"
            >
              Balanço Total
            </Text>
            <Text
              fontFamily="body"
              fontSize="xl"
              fontWeight="bold"
              color="white"
            >
              {formatMoney(
                userLoggedIn.accounts[0].balance,
                userLoggedIn.accounts[0].currency
              )}
            </Text>
          </VStack>
          <Icon
            as={<MaterialIcons />}
            name="credit-card"
            size="5xl"
            color="white"
          />
        </HStack>
      </Box>

      <VStack mt="9" space={9}>
        <Button
          onPress={() => navigation.push('NFCPayment')}
          bg="primary.100"
          rounded="xl"
          shadow={6}
          _text={{
            fontFamily: 'body',
            fontSize: 'lg',
            fontWeight: 'bold',
          }}
          startIcon={
            <Icon
              as={<MaterialIcons />}
              name="credit-card"
              size="2xl"
              color="white"
            />
          }
        >
          NFC
        </Button>
        <Button
          bg="primary.100"
          rounded="xl"
          shadow={6}
          _text={{
            fontFamily: 'body',
            fontSize: 'lg',
            fontWeight: 'bold',
          }}
          leftIcon={
            <Icon
              as={<MaterialIcons />}
              name="qr-code"
              size="2xl"
              color="white"
            />
          }
        >
          Código QR
        </Button>
      </VStack>
    </Container>
  );
};

export default Payment;
