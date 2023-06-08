import { Avatar, Button, Icon, Text, View } from 'native-base';
import {
  ArrowRight,
  Bookmark,
  MapPin,
  ShareNetwork,
} from 'phosphor-react-native';
import React from 'react';
import { StatusBar } from 'react-native';

import Header from '../components/layout/Header';
import { useUser } from '../hooks';

// import { Container } from './styles';

const Profile: React.FC = () => {
  const { user, logout } = useUser();
  return (
    <View flex={1} bg={'white'} padding={6} pt={StatusBar.currentHeight - 20}>
      <Header heading="Perfil" />
      <View
        shadow={'1'}
        my={'8'}
        rounded={'xl'}
        bg={'white'}
        alignItems={'center'}
      >
        <Avatar
          size={76}
          top={'-8'}
          source={{ uri: user.avatarImageURL }}
          shadow={6}
        />
        <Text fontWeight={'bold'} fontSize={'lg'}>
          {user.firstName} {user.lastName}
        </Text>
        <View
          width={'full'}
          //   flexDirection={'c'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <View
            width={'full'}
            alignItems={'center'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <Icon as={Bookmark} />
            <View>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                NIF
              </Text>
              <Text fontWeight={'bold'} color={'primary.100'}>
                {user.nif}
              </Text>
            </View>
          </View>
          <View
            width={'full'}
            alignItems={'center'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <Icon as={MapPin} />
            <View>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                ENDEREÇO
              </Text>
              <Text fontWeight={'bold'} color={'primary.100'}>
                {user.address.city}
              </Text>
              {/* <Text>{user.address.country}</Text> */}
            </View>
          </View>
        </View>
        <View width={'full'} padding={'6'} alignItems={'flex-end'}>
          <ShareNetwork size={32} />
        </View>
      </View>
      <View my={'4'}>
        <View
          width={'full'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          px={2}
          py={6}
          borderBottomColor={'black'}
          borderBottomWidth={1}
        >
          <Text fontWeight={'bold'} color={'primary.100'}>
            Editar Perfil
          </Text>
          <ArrowRight />
        </View>
        <View
          width={'full'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          py={6}
          px={2}
          borderBottomColor={'black'}
          borderBottomWidth={1}
        >
          <Text fontWeight={'bold'} color={'primary.100'}>
            Politica de Privacidade
          </Text>
          <ArrowRight />
        </View>
        <View
          width={'full'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          py={6}
          px={2}
          borderBottomColor={'black'}
          borderBottomWidth={1}
        >
          <Text fontWeight={'bold'} color={'primary.100'}>
            Termos e Responsabilidade
          </Text>
          <ArrowRight />
        </View>
        <View
          width={'full'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          py={6}
          px={2}
          borderBottomColor={'black'}
          borderBottomWidth={1}
        >
          <Text fontWeight={'bold'} color={'primary.100'}>
            Conctatos
          </Text>
          <ArrowRight />
        </View>
      </View>
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
    </View>
  );
};

export default Profile;
