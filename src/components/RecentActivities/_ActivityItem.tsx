import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Avatar, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { RootStackParamListType } from '../../constants/routes';
import { TransactionType } from '../../models/Transaction';
import { formatMoney } from '../../utils/formatter';

type Props = {
  activity: TransactionType;
};

const ActivityItem: FC<Props> = ({ activity }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamListType, 'home'>>();

  const displayName =
    activity.type === 'receive'
      ? activity.origin.name
      : activity.type === 'payment'
      ? activity.entityName
      : activity.destination.name;

  return (
    <Pressable
      onPress={() => {
        navigation.push('details', {
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
                bg="_neutral.50"
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
              color="_primary.500"
              size="3xl"
              mx="2.5"
            />
          )}
          <VStack space={2}>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="lg"
              color="_neutral.300"
            >
              {displayName}
            </Text>
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="lg"
              color="_neutral.300"
            >
              {activity.transactionDate}
            </Text>
          </VStack>
        </HStack>
        <Text
          fontFamily="body"
          fontWeight="bold"
          fontSize="lg"
          color="_neutral.600"
        >
          {formatMoney(activity.amount, activity.currency)}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ActivityItem;
