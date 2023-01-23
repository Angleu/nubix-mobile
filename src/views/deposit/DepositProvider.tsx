import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Box, Heading, HStack, Icon, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { MainStackScreenProps } from '../../routes/types';

const DepositProvider: FC<MainStackScreenProps<'DepositProvider'>> = ({
  navigation,
  route,
}) => {
  const { params } = route;
  return (
    <Container>
      <Header heading="Depósito" />

      <Heading fontSize="3xl" mt="2">
        Selecionar Origem
      </Heading>

      <VStack space="8" mt="16">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DepositProviderCreditCard', params)
          }
        >
          <HStack space="5" alignItems="center">
            <Box
              p="3"
              borderRadius="full"
              borderWidth="1"
              borderColor="light.200"
            >
              <Icon size="2xl" color="black" as={Entypo} name="credit-card" />
            </Box>
            <Text fontWeight="bold" color="coolGray.700" fontSize="sm">
              Cartão VISA / Mastercard
            </Text>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DepositProviderBank', params)}
        >
          <HStack space="5" alignItems="center">
            <Box
              p="3"
              borderRadius="full"
              borderWidth="1"
              borderColor="light.200"
            >
              <Icon size="2xl" color="black" as={FontAwesome} name="bank" />
            </Box>
            <Text fontWeight="bold" color="coolGray.700" fontSize="sm">
              Transferência Bancária
            </Text>
          </HStack>
        </TouchableOpacity>
        <TouchableOpacity disabled>
          <HStack space="5" alignItems="center" opacity={30}>
            <Box
              p="3"
              borderRadius="full"
              borderWidth="1"
              borderColor="light.200"
            >
              <Icon size="2xl" color="black" as={Entypo} name="paypal" />
            </Box>
            <Text fontWeight="bold" color="coolGray.700" fontSize="sm">
              Paypal
            </Text>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </Container>
  );
};

export default DepositProvider;
