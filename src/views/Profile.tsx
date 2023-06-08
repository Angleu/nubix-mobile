import {
  Avatar,
  Button,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {
  ArrowRight,
  Bookmark,
  MapPin,
  ShareNetwork,
} from 'phosphor-react-native';
import React from 'react';
import { Share, StyleSheet, TouchableOpacity } from 'react-native';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { createShareableMessage } from '../utils/formatter';

const links = [
  {
    title: 'Editar Perfil',
    link: '',
  },
  {
    title: 'Política de Privacidade',
    link: '',
  },
  {
    title: 'Termos e Responsabilidade',
    link: '',
  },
  {
    title: 'Contactos',
    link: '',
  },
];

const Profile: React.FC<MainStackScreenProps<'Profile'>> = ({ navigation }) => {
  const { user, logout } = useUser();

  function shareAccount() {
    const { firstName, lastName, phoneNumber, accounts } = user;
    Share.share(
      {
        title: 'Detalhes de Conta',
        message: createShareableMessage({
          name: `${firstName} ${lastName}`,
          phoneNumber: phoneNumber,
          iban: accounts[0].IBAN,
        }),
      },
      { dialogTitle: 'Detalhes de Conta' }
    );
  }

  function navigateTo(link: string) {
    console.log(link);
    navigation.navigate('Profile');
  }

  return (
    <Container>
      <Header heading="Perfil" />
      <ScrollView px="4">
        <VStack alignItems="center" mt="10">
          <Avatar size={76} source={{ uri: user.avatarImageURL }} shadow={6} />
          <Text fontWeight={'bold'} fontSize={'lg'}>
            {user.firstName} {user.lastName}
          </Text>
        </VStack>
        <VStack mt="4" w="1/2" mx="auto" space="2">
          <HStack space="5">
            <Icon as={Bookmark} />
            <VStack>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                NIF
              </Text>
              <Text fontWeight={'bold'} color={'primary.100'}>
                {user.nif}
              </Text>
            </VStack>
          </HStack>
          <HStack space="5">
            <Icon as={MapPin} />
            <VStack>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                Endereço
              </Text>
              <Text
                fontWeight={'bold'}
                textTransform="capitalize"
                color={'primary.100'}
              >
                {user.address.city}
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={shareAccount}
            borderRadius="full"
            _pressed={{
              bg: 'light.50',
            }}
            icon={<Icon as={<ShareNetwork size={32} />} />}
          />
        </HStack>
        <VStack mt="10">
          {links.map(({ link, title }) => (
            <TouchableOpacity
            activeOpacity={0.4}
              key={title}
              onPress={() => navigateTo(link)}
              style={styles.link}
            >
              <HStack justifyContent={'space-between'}>
                <Text fontWeight={'bold'} color={'primary.100'}>
                  {title}
                </Text>
                <ArrowRight />
              </HStack>
            </TouchableOpacity>
          ))}
        </VStack>
        <Button
          _pressed={{ bg: 'danger.300' }}
          bg={'danger.500'}
          rounded={'full'}
          mx={'16'}
          mt={'6'}
          onPress={logout}
        >
          Sair
        </Button>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  link: {
    marginBottom: 30,
  },
});

export default Profile;
