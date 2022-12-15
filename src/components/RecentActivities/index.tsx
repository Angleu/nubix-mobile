import { FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { activitiesMock } from '../../utils';
import ActivityCard from './_ActivityCard';

const RecentActivities = () => {
  return (
    <VStack mt={6} flex={1}>
      <HStack justifyContent="space-between">
        <Text color="#373737" fontWeight="semibold">
          Recent Activity
        </Text>
        <Text color="#3F5857" fontWeight="bold">
          See All
        </Text>
      </HStack>

      <FlatList
        data={activitiesMock}
        mt={3}
        renderItem={({ item }) => <ActivityCard item={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
