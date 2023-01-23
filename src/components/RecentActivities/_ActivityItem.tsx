import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { Avatar, HStack, Icon, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

import { TransactionType } from '../../models/Transaction';
import { MainStackNavigationProps } from '../../routes/types';
import { formatMoney } from '../../utils/formatter';

type Props = {
  activity: TransactionType;
};

const ActivityItem: FC<Props> = ({ activity }) => {
  const navigation = useNavigation<MainStackNavigationProps<'HomeTab'>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Details', {
          transaction: activity,
        });
      }}
    >
      <HStack justifyContent="space-between" mb={6} alignItems="center">
        <HStack space={6} alignItems="center">
          {activity.type === 'receive' ? (
            <>
              <Avatar
                source={{ uri: activity.user_destine.avatar }}
                bg="white"
                p={2}
                mx={1}
                shadow={1}
              />
            </>
          ) : (
            <Icon
              as={Ionicons}
              name="paper-plane"
              color="primary.100"
              size="3xl"
              mx="2.5"
            />
          )}

          <VStack space={2}>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="lg"
              color="coolGray.700"
            >
              {activity.user_destine.name}
            </Text>
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="lg"
              color="coolGray.700"
            >
              {format(new Date(activity.data_transaction), 'dd/MM/yyyy hh:mm')}
            </Text>
          </VStack>
        </HStack>
        <Text fontFamily="body" fontWeight="bold" fontSize="lg" color="black">
          {formatMoney(activity.amount, activity.coin === 'AOA' ? 'Kzs' : '$')}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

export default ActivityItem;
