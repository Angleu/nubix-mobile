import { Avatar, HStack, Pressable,Text, View } from 'native-base';
import { ArrowCircleLeft } from 'phosphor-react-native';
import React from 'react';
import MapView from 'react-native-maps';

import { useUser } from '../../hooks';
import { MainStackScreenProps } from '../../routes/types';

const FindPost: React.FC = ({
  navigation,
}: MainStackScreenProps<'FindPost'>) => {
  //   const { latitude, longitude, search } = route.params;
  const {
    user: { avatarImageURL },
  } = useUser();
  return (
    <View flex={1}>
      <View
        flex={1}
        position={'absolute'}
        width={'full'}
        zIndex={10}
        padding={'6'}
      >
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={'2'}
          bg={'white'}
          rounded={'lg'}
          //   mx={4}
          top={0}
          mt={'6'}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowCircleLeft size={32} />
          </Pressable>
          <Text fontSize={'md'} fontWeight={'bold'} color={'primary.100'}>
            Map
          </Text>
          <Avatar source={{ uri: avatarImageURL }} shadow={4} />
        </HStack>
      </View>
      <MapView style={{ width: '100%', height: '100%' }} />
    </View>
  );
};

export default FindPost;
