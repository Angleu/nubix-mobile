import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import React from 'react';

import { formatMoney } from '../utils/formatter';
import { userLoggedIn } from '../utils/mocks/users';

const Card = () => {
  return (
    <Box mt={5} bg="_primary.50" px="10" py="8" rounded="3xl" shadow="8">
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
          color="_neutral.50"
        />
      </HStack>
      <HStack justifyContent="flex-end">
        <IconButton
          borderRadius="full"
          variant="ghost"
          icon={
            <Icon
              as={<MaterialCommunityIcons />}
              name="share-variant-outline"
            />
          }
          _icon={{ color: '_neutral.50', size: '2xl' }}
        />
      </HStack>
    </Box>
  );
};

export default Card;
