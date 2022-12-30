import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { CurrencyLiteral } from '../models/Account';
import { formatMoney } from '../utils/formatter';

type Props = {
  currency: CurrencyLiteral;
  balance: number;
  onShare: () => void;
};

const Card: FC<Props> = ({ balance, currency, onShare }) => {
  return (
    <Box mt={5} mx="2" bg="primary.50" px="10" py="8" rounded="3xl" shadow="8">
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
          <Text fontFamily="body" fontSize="xl" fontWeight="bold" color="white">
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
          _icon={{ color: 'white', size: '2xl' }}
          onPress={onShare}
        />
      </HStack>
    </Box>
  );
};

export default Card;
