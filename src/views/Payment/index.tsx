import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';

const Pay = () => {
  return (
    <Container>
      <Header heading="Pagamento" />
      <Box
        mt={12}
        bg="_primary.50"
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
              color="_neutral.50"
              fontSize="sm"
              fontWeight="medium"
            >
              Balanço Total
            </Text>
            <Text
              fontFamily="body"
              fontSize="xl"
              fontWeight="bold"
              color="_neutral.50"
            >
              188 290.90 Kzs
            </Text>
          </VStack>
          <Icon
            as={<MaterialIcons />}
            name="credit-card"
            size="5xl"
            color="_neutral.50"
          />
        </HStack>
      </Box>

      <VStack mt="9" space={9}>
        <Button
          bg="_primary.500"
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
              color="_neutral.50"
            />
          }
        >
          NFC
        </Button>
        <Button
          bg="_primary.500"
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
              color="_neutral.50"
            />
          }
        >
          Código QR
        </Button>
      </VStack>
    </Container>
  );
};

export default Pay;