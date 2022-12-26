import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React, { FC } from 'react';

import { HomeScreenProp } from '../../constants/routes';
import { TransactionType } from '../../models/Transaction';

type Props = {
  activity: TransactionType;
};

const ActivityItem: FC<Props> = ({ activity }) => {
  const { navigation } = useNavigation<HomeScreenProp>();

  let componentToRender: JSX.Element;

  switch (activity.type) {
    case 'payment':
      componentToRender = (
        <>
          <Icon
            as={<MaterialIcons />}
            name="payments"
            color="_primary.500"
            size="3xl"
            mx="2.5"
          />
          <VStack space={2}>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="lg"
              color="_neutral.300"
            >
              {activity.entityName}
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
          <Text
            fontFamily="body"
            fontWeight="bold"
            fontSize="lg"
            color="_neutral.600"
          >
            {activity.amount}
          </Text>
        </>
      );
      break;
    case 'receive':
      componentToRender = (
        <>
          <Avatar
            source={{ uri: activity.origin.profilePictureURL }}
            bg="_neutral.50"
            p={2}
            mx={1}
            shadow={4}
          />
          <VStack space={2}>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="lg"
              color="_neutral.300"
            >
              {activity.origin.name}
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
          <Text
            fontFamily="body"
            fontWeight="bold"
            fontSize="lg"
            color="_neutral.600"
          >
            {activity.amount}
          </Text>
        </>
      );
      break;
    case 'send':
      componentToRender = (
        <>
          <Icon
            as={<Ionicons />}
            name="paper-plane"
            color="_primary.500"
            size="3xl"
            mx="2.5"
          />
          <VStack space={2}>
            <Text
              fontFamily="body"
              fontWeight="bold"
              fontSize="lg"
              color="_neutral.300"
            >
              {activity.destination.name}
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
          <Text
            fontFamily="body"
            fontWeight="bold"
            fontSize="lg"
            color="_neutral.600"
          >
            {activity.amount}
          </Text>
        </>
      );
      break;
    default:
      componentToRender = undefined;
  }

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('details', {
          transaction: activity,
        });
      }}
    >
      <HStack justifyContent="space-between" mb={6} alignItems="center">
        <HStack space={6} alignItems="center">
          {componentToRender}
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default ActivityItem;
