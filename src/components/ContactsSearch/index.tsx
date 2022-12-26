import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import { TransferScreenProps } from '../../constants/routes';
import contactsMock from '../../utils/mocks/users';

// TODO: Make search form functional
const ContactsSearch = () => {
  const { navigation } = useNavigation<TransferScreenProps>();
  return (
    <>
      <Center>
        <Text mb={6} fontSize="lg" fontWeight="bold" color="_neutral.200">
          Contactos
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
            <Pressable
              onPress={() =>
                navigation.push('transferValue', {
                  destination: item,
                })
              }
            >
              <HStack space={6} alignItems="center">
                <Avatar
                  source={{ uri: item.profilePictureURL }}
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
            </Pressable>
          </Box>
        )}
      />
    </>
  );
};

export default ContactsSearch;
