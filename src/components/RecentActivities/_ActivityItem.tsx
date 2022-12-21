import { Ionicons } from '@expo/vector-icons';
import { Avatar, HStack, Icon, Pressable, Text, VStack } from 'native-base';
import React, { FC } from 'react';

type Props = {
  item: {
    name: string;
    date: string;
    amount: string;
    profilePic: string;
  };
};

const ActivityItem: FC<Props> = ({ item }) => {
  return (
    <Pressable>
      <HStack justifyContent="space-between" mb={6} alignItems="center">
        <HStack space={6} alignItems="center">
          {item.profilePic ? (
            <Avatar
              source={{ uri: item.profilePic }}
              bg="_neutral.50"
              p={2}
              mx={1}
              shadow={4}
            />
          ) : (
            <Icon
              as={<Ionicons />}
              name="paper-plane"
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
              {item.name}
            </Text>
            <Text
              fontFamily="body"
              fontWeight="normal"
              fontSize="lg"
              color="_neutral.300"
            >
              {item.date}
            </Text>
          </VStack>
        </HStack>
        <Text
          fontFamily="body"
          fontWeight="bold"
          fontSize="lg"
          color="_neutral.600"
        >
          {item.amount}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ActivityItem;
