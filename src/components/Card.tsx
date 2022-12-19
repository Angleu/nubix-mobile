import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import React from 'react';

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
            Total Balance
          </Text>
          <Text
            fontFamily="body"
            fontSize="xl"
            fontWeight="bold"
            color="_neutral.50"
          >
            $ 188,290.90
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
