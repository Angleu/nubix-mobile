import { Avatar, Box, HStack, Text, VStack } from 'native-base';
import { PaperPlaneTilt } from 'phosphor-react-native';
import React, { FC } from 'react';

type Props = {
  item: {
    name: string;
    date: string;
    amount: string;
    profilePic: string;
  };
};

const ActivityCard: FC<Props> = ({ item }) => {
  return (
    <HStack justifyContent="space-between" mb={4} alignItems="center">
      <HStack space={3} alignItems="center">
        {item.profilePic ? (
          <Avatar
            source={{ uri: item.profilePic }}
            bg="white"
            p={1}
            mx={1}
            shadow={4}
          />
        ) : (
          <Box p={1} shadow={4} mx={2}>
            <PaperPlaneTilt color="#3F5857" size={32} />
          </Box>
        )}
        <VStack>
          <Text fontWeight="bold" color="#373737">
            {item.name}
          </Text>
          <Text color="#373737">{item.date}</Text>
        </VStack>
      </HStack>
      <Text fontWeight="bold">{item.amount}</Text>
    </HStack>
  );
};

export default ActivityCard;
