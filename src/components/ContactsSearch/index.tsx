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
  Text,
  VStack,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { MainStackNavigationProps } from '../../routes/types';
import contactsMock from '../../utils/mocks/users';

const ContactsSearch = () => {
  const { push } = useNavigation<MainStackNavigationProps<'Transfer'>>();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(
    () =>
      contactsMock.filter((contact) => {
        if (!searchTerm) return contact;
        if (
          /^\d+$/.test(searchTerm) &&
          contact.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
        )
          return contact;
        if (contact.name.toLowerCase().includes(searchTerm.toLowerCase()))
          return contact;
      }),
    [searchTerm]
  );

  return (
    <>
      <Center>
        <Text mb={6} fontSize="lg" fontWeight="bold" color="gray.700">
          Contactos
        </Text>
        <Input
          value={searchTerm}
          onChangeText={setSearchTerm}
          py="2"
          borderRadius="xl"
          borderColor="primary.100"
          placeholder="Pesquisar por nome ou número de telefone"
          _focus={{
            bg: 'white',
            borderColor: '_primary.200',
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons />}
              name="search"
              color="primary.100"
              size="2xl"
              ml={3}
            />
          }
        />
      </Center>
      <FlatList
        showsVerticalScrollIndicator={false}
        mt={6}
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Box bg="white" shadow={2} mb="6" mx={1} p={2} rounded="3xl">
            <TouchableOpacity
              onPress={() =>
                push('TransferValue', {
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
                    color="coolGray.700"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="normal"
                    fontSize="md"
                    color="coolGray.700"
                    opacity={70}
                  >
                    {item.phoneNumber}
                  </Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          </Box>
        )}
      />
    </>
  );
};

export default ContactsSearch;
