import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { Heading, Icon, IconButton, Text, VStack } from 'native-base';
import React, { useEffect, useRef } from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';

const STOP_ANIMATION_FRAME = 138;

const NFCPayment = () => {
  const animation = useRef<LottieView>(null);

  useEffect(() => {
    animation.current.play(0, STOP_ANIMATION_FRAME);
  }, []);

  return (
    <Container>
      <Header
        heading="Pagamento"
        RightIcon={
          <IconButton
            _pressed={{
              bg: 'light.50',
            }}
            icon={
              <Icon
                as={Entypo}
                name="dots-three-horizontal"
                size="xl"
                color="black"
              />
            }
            borderRadius="full"
          />
        }
      />

      <VStack alignItems="center" mt="20" space="4">
        <Heading
          fontFamily="body"
          fontWeight="bold"
          fontSize="2xl"
          color="primary.100"
        >
          CONTACTLESS
        </Heading>
        <Icon
          as={MaterialCommunityIcons}
          name="contactless-payment"
          color="primary.100"
          size="lg"
        />
      </VStack>

      <LottieView
        autoPlay
        loop
        ref={animation}
        speed={0.6}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#fff',
        }}
        source={require('../../assets/animation/contactless-payment.json')}
      />

      <Text
        textAlign="center"
        mt="16"
        fontFamily="body"
        fontWeight="normal"
        fontSize="lg"
        color="primary.100"
      >
        APROXIME O TELEFONE AO TPA
      </Text>
    </Container>
  );
};

export default NFCPayment;
