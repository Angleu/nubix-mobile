import { Avatar, HStack, Pressable, Text, View } from 'native-base';
import { ArrowCircleLeft } from 'phosphor-react-native';
import React from 'react';
import * as Animateble from 'react-native-animatable';
import MapView from 'react-native-maps';

import { useUser } from '../../hooks';
import { MainStackScreenProps } from '../../routes/types';

const DURATION = 400;
const FindPost: React.FC = ({
  navigation, route
}: MainStackScreenProps<'FindPost'>) => {
    const { latitude, longitude, search } = route.params;
  const {
    user: { avatarImageURL },
  } = useUser();

  return (
    <View flex={1}>
      <Animateble.View
      style={{
        flex: 1,
        position:'absolute',
        width:'100%',
        zIndex: 10,
        padding: 24
      }}
      animation='fadeInUp'
      delay={DURATION}
        // flex={1}
        // position={'absolute'}
        // width={'full'}
        // zIndex={10}
        // padding={'6'}
      > 
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={'2'}
          bg={'white'}
          rounded={'lg'}
          shadow={'6'}
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
      </Animateble.View>
      <MapView style={{ width: '100%', height: '100%' }} 
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 5.5,
          longitudeDelta: 5.5
        }}
      />
    </View>
  );
};

export default FindPost;
