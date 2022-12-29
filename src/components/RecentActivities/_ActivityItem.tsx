import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { TransactionType } from '../../models/Transaction';
import { MainStackNavigationProps } from '../../routes/types';
import { formatMoney } from '../../utils/formatter';

type Props = {
  activity: TransactionType;
};

const ActivityItem: FC<Props> = ({ activity }) => {
  const navigation = useNavigation<MainStackNavigationProps<'HomeTab'>>();

  const displayName =
    activity.type === 'receive'
      ? activity.origin.name
      : activity.type === 'payment'
      ? activity.entityName
      : activity.destination.name;

  return (
    <Pressable
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
                source={{ uri: activity.origin.profilePictureURL }}
                bg="white"
                p={2}
                mx={1}
                shadow={4}
              />
            </>
          ) : (
            <Icon
              as={
                activity.type === 'payment' ? <MaterialIcons /> : <Ionicons />
              }
              name={activity.type === 'payment' ? 'payments' : 'paper-plane'}
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
              {displayName}
            </Text>
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="lg"
              color="coolGray.700"
            >
              {activity.transactionDate}
            </Text>
          </VStack>
        </HStack>
        <Text fontFamily="body" fontWeight="bold" fontSize="lg" color="black">
          {formatMoney(activity.amount, activity.currency)}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ActivityItem;
