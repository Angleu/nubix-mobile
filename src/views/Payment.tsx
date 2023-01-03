import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import Swiper from 'react-native-swiper';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { MainStackScreenProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { userLoggedIn } from '../utils/mocks/users';
import { androidRippleEffect } from '../utils/theme/style';

const Payment = ({ navigation }: MainStackScreenProps<'Payment'>) => {
  return (
    <Container>
      <Header heading="Pagamento" />
      <Swiper
        containerStyle={{ flex: 0.6 }}
        loop={false}
        horizontal
        bounces
        dot={<Box w="2" h="2" bg="gray.100" borderRadius="full" m="1" />}
        activeDot={
          <Box w="4" h="2" bg="primary.100" borderRadius="full" m="1" />
        }
      >
        {userLoggedIn.accounts.map(({ accountNumber, balance, currency }) => (
          <Box
            key={accountNumber}
            mt={12}
            mx={2}
            bg="primary.50"
            px="10"
            py="16"
            rounded="3xl"
            shadow="8"
          >
            <HStack justifyContent="space-between">
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
                  {formatMoney(balance, currency)}
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
        ))}
      </Swiper>

      <VStack flex={1} space={9}>
        <Button
          android_ripple={androidRippleEffect}
          _pressed={{ bg: 'primary.100' }}
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
          android_ripple={androidRippleEffect}
          _pressed={{ bg: 'primary.100' }}
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
