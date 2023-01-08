import { Entypo } from '@expo/vector-icons';
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Text,
} from 'native-base';
import React from 'react';

import { androidRippleEffect } from '../utils/theme/style';

const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

const AnalyticsCalendar = () => {
  const currentDate = new Date();
  return (
    <Box my="6" bg="white" shadow={4} borderRadius="2xl" py="4" px="4">
      <HStack alignItems="center" justifyContent="space-between">
        <IconButton
          borderRadius="full"
          _pressed={{
            bg: 'light.50',
          }}
          icon={<Icon name="chevron-left" as={Entypo} color="black" />}
        />
        <Text fontSize="lg" fontFamily="heading" fontWeight="bold">
          Janeiro, 2023
        </Text>
        <IconButton
          borderRadius="full"
          _pressed={{
            bg: 'light.50',
          }}
          icon={<Icon name="chevron-right" as={Entypo} color="black" />}
        />
      </HStack>
      <HStack mt="6" mb="4" justifyContent="space-between">
        {daysOfWeek.map((day) => (
          <Text
            color="gray.500"
            fontFamily="body"
            fontSize="md"
            fontWeight="bold"
            key={day}
          >
            {day}
          </Text>
        ))}
      </HStack>
      <HStack px="1" justifyContent="space-between">
        {[
          [2, 3, 4, 5, 6, 7, 8].map((day) => (
            <Pressable
              key={day}
              android_ripple={androidRippleEffect}
              _pressed={{ opacity: 80 }}
              borderRadius="md"
              py="2"
              px="1"
              bg={day === currentDate.getDate() ? 'primary.100' : 'white'}
            >
              <Center>
                <Text
                  textAlign="center"
                  w="5"
                  fontFamily="body"
                  fontSize="md"
                  fontWeight="bold"
                  color={day === currentDate.getDate() ? 'white' : 'gray.900'}
                >
                  {day}
                </Text>
                <Box w="1" h="1" borderRadius="full" bg="white" />
              </Center>
            </Pressable>
          )),
        ]}
      </HStack>
    </Box>
  );
};

export default AnalyticsCalendar;
