import { Avatar, Box, Center, Heading, Text } from 'native-base';
import React, { useState } from 'react';

import SlideButton from '../components/button/SlideButton';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { MainStackScreenProps } from '../routes/types';

const TransferConfirmation = ({
  route,
}: MainStackScreenProps<'TransferConfirmation'>) => {
  const { destination, transferAmount, message } = route.params;

  const [isConfirmed, setConfirmed] = useState(false);

  return (
    <Container>
      <Header heading="" />

      <Center mt="12">
        <Heading fontFamily="heading" fontSize="xl" color="primary.100">
          Irá Transferir
        </Heading>
        <Avatar mt="5" />
        <Text
          my="2"
          fontFamily="body"
          fontSize="lg"
          fontWeight="bold"
          color="coolGray.700"
        >
          {destination.name}
        </Text>
        <Text
          fontFamily="body"
          fontSize="lg"
          fontWeight="light"
          color="coolGray.700"
        >
          {destination.phoneNumber}
        </Text>
        <Text
          my="12"
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
          {transferAmount}
        </Text>
        {message && (
          <>
            <Text fontFamily="body" fontSize="xl" color="primary.100">
              Com a mensagem
            </Text>
            <Box
              mt="7"
              mb="12"
              bg="primary.50"
              w="full"
              rounded="2xl"
              p="4"
              minH="32"
              shadow={2}
            >
              <Text color="white" fontFamily="body" fontSize="md">
                {message}
              </Text>
            </Box>
          </>
        )}
        {isConfirmed ? (
          <Heading fontFamily="heading" fontSize="xl" color="primary.100">
            Transferência Efetuada com Sucesso
          </Heading>
        ) : (
          <SlideButton
            buttonMessage="Arraste para enviar"
            onSwipeComplete={() => setConfirmed(true)}
          />
        )}
      </Center>
    </Container>
  );
};

export default TransferConfirmation;
