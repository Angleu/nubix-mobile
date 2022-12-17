import { MaterialIcons } from '@expo/vector-icons';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import { contactsMock } from '../../utils';

// TODO: Make search form functional
const ContactsSearch = () => {
  return (
    <>
      <Center>
        <Text mb={6} fontSize="lg" fontWeight="bold" color="_neutral.200">
          Contacts
        </Text>
        <Input
          py="2"
          borderRadius="xl"
          borderColor="_primary.500"
          placeholder="Search"
          _focus={{
            bg: '_neutral.50',
            borderColor: '_primary.200',
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons />}
              name="search"
              color="_primary.500"
              size="2xl"
              ml={3}
            />
          }
        />
      </Center>
      <FlatList
        mt={6}
        data={contactsMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box bg="_neutral.50" shadow={2} mb="6" mx={1} p={2} rounded="3xl">
            <HStack space={6} alignItems="center">
              <Avatar
                source={{ uri: item.profilePic }}
                bg="_secondary.50"
                size="lg"
              />
              <VStack>
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
                  fontSize="md"
                  color="_neutral.300"
                  opacity={70}
                >
                  {item.phoneNumber}
                </Text>
              </VStack>
            </HStack>
          </Box>
        )}
      />
    </>
  );
};

export default ContactsSearch;
