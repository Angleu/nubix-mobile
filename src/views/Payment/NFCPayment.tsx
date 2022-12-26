import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Heading, Icon, IconButton, Text, VStack } from 'native-base';
import React from 'react';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';

const NFCPayment = () => {
  return (
    <Container>
      <Header
        heading="Pagamento"
        RightIcon={
          <IconButton
            icon={
              <Icon
                as={Entypo}
                name="dots-three-horizontal"
                size="xl"
                color="_neutral.600"
              />
            }
            borderRadius="full"
          />
        }
      />

      <VStack alignItems="center" mt="20" space="4">
        <Heading
          fontFamily="body"
          fontWeight="bold"
          fontSize="2xl"
          color="_primary.500"
        >
          CONTACTLESS
        </Heading>
        <Icon
          as={MaterialCommunityIcons}
          name="contactless-payment"
          color="_primary.500"
          size="lg"
        />
      </VStack>

      {/* Place animation here */}

      <Text
        textAlign="center"
        mt="16"
        fontFamily="body"
        fontWeight="normal"
        fontSize="lg"
        color="_primary.500"
      >
        APROXIME O TELEFONE AO TPA
      </Text>
    </Container>
  );
};

export default NFCPayment;
