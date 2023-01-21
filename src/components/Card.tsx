import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack
} from 'native-base';
import React, { FC } from 'react';

import bankLogo from '../../assets/images/adaptive-icon.png';
import { formatMoney } from '../utils/formatter';
import { androidRippleEffect } from '../utils/theme/style';

type Props = {
  coin: string;
  balance: number;
  onShare: () => void;
};

const Card: FC<Props> = ({ balance, coin, onShare }) => {
  return (
    <Box mt={5} mx="2" bg="white" px="10" py="6" rounded="3xl" shadow="8">
      <HStack>
        <VStack>
          <Image w={10} h={10} source={bankLogo} alt="Nubix Bank" />
          <Text
            fontFamily="body"
            color="primary.100"
            fontSize="sm"
            fontWeight="medium"
          >
            Balanço Total
          </Text>
          <Text
            fontFamily="body"
            fontSize="xl"
            fontWeight="bold"
            color="primary.100"
          >
            {formatMoney(balance, coin === 'AOA' ? 'Kzs' : '$')}
          </Text>
        </VStack>
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
          android_ripple={androidRippleEffect}
          _pressed={{
            bg: 'light.50',
          }}
          _icon={{ color: 'primary.100', size: '2xl' }}
          onPress={onShare}
        />
      </HStack>
    </Box>
  );
};

export default Card;
