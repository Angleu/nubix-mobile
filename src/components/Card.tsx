import { Box, HStack, Text, VStack } from 'native-base';
import { CreditCard, ShareNetwork } from 'phosphor-react-native';
import React from 'react';

const Card = () => {
  return (
    <Box mt={10} bg="brand.primary.50" px="8" py="4" rounded="3xl" shadow="9">
      <HStack justifyContent="space-between" mb={8}>
        <VStack>
          <Text color="white" fontSize="md">
            Total Balance
          </Text>
          <Text color="white" fontWeight="bold" fontSize="lg">
            $ 188,290.90
          </Text>
        </VStack>
        <CreditCard color="#fff" size={35} />
      </HStack>
      <HStack justifyContent="flex-end">
        <ShareNetwork size={26} color="white" />
      </HStack>
    </Box>
  );
};

export default Card;
