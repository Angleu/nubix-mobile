import { Button, FlatList, HStack, Text, VStack } from 'native-base';
import React from 'react';

import { activitiesMock } from '../../utils';
import ActivityItem from './_ActivityItem';

const RecentActivities = () => {
  return (
    <VStack mt={5} flex={1}>
      <HStack justifyContent="space-between">
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
        mt={2}
        renderItem={({ item }) => <ActivityItem item={item} />}
      />
    </VStack>
  );
};

export default RecentActivities;
