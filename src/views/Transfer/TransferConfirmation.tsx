import { Avatar, Box, Center, Heading, Text } from 'native-base';
import React, { useState } from 'react';

import SlideButton from '../../components/button/SlideButton';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { ScreenProps } from '../../constants/routes';

const TransferConfirmation = ({
  route,
}: ScreenProps<'transferConfirmation'>) => {
  const { destination, transferAmount, message } = route.params;

  const [isConfirmed, setConfirmed] = useState(false);

  return (
    <Container>
      <Header heading="" />

      <Center mt="12">
        <Heading fontFamily="heading" fontSize="xl" color="_primary.500">
          Irá Transferir
        </Heading>
        <Avatar mt="5" />
        <Text
          my="2"
          fontFamily="body"
          fontSize="lg"
          fontWeight="bold"
          color="_neutral.300"
        >
          {destination.name}
        </Text>
        <Text
          fontFamily="body"
          fontSize="lg"
          fontWeight="light"
          color="_neutral.300"
        >
          {destination.phoneNumber}
        </Text>
        <Text
          my="12"
          fontFamily="body"
          fontWeight="bold"
          fontSize="4xl"
          color="_primary.500"
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
            <Text fontFamily="body" fontSize="xl" color="_primary.500">
              Com a mensagem
            </Text>
            <Box
              mt="7"
              mb="12"
              bg="_primary.50"
              w="full"
              rounded="2xl"
              p="4"
              minH="32"
              shadow={2}
            >
              <Text color="_neutral.50" fontFamily="body" fontSize="md">
                {message}
              </Text>
            </Box>
          </>
        )}
        {isConfirmed ? (
          <Heading fontFamily="heading" fontSize="xl" color="_primary.500">
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
