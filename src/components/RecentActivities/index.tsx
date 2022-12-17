import { Button, FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { activitiesMock } from '../../utils';
import ActivityItem from './_ActivityItem';

const RecentActivities = () => {
  return (
    <VStack mt={12} flex={1}>
      <HStack justifyContent="space-between" mb={0}>
        <Text
          fontFamily="body"
          fontWeight="bold"
          fontSize="lg"
          color="_neutral.300"
        >
          Recent Activity
        </Text>
        <Button
          variant="link"
          p="0"
          _text={{
            fontFamily: 'body',
            fontWeight: 'bold',
            fontSize: 'lg',
            color: '_primary.500',
          }}
        >
          See All
        </Button>
      </HStack>
      <FlatList
        data={activitiesMock}
        mt={8}
        renderItem={({ item }) => <ActivityItem item={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
