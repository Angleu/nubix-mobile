import { MaterialIcons } from '@expo/vector-icons';
import {
  Button,
  Center,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import NumberButton from '../../components/Buttons/NumberButton';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';

const TransferValue = () => {
  return (
    <Container>
      <Header heading="Transfer" />
      <ScrollView>
        <Center mt={11} mb={12}>
          <Text
            mb={6}
            fontFamily="body"
            fontWeight="medium"
            fontSize="xl"
            color="_primary.500"
          >
            Value to Transfer
          </Text>
          <Text
            fontFamily="body"
            fontWeight="bold"
            fontSize="4xl"
            color="_primary.500"
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 10,
            }}
          >
            $ 500.00
          </Text>
        </Center>
        <VStack space={3} px={10}>
          <HStack space={9}>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
          </HStack>
          <HStack space={9}>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
          </HStack>
          <HStack space={9}>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
          </HStack>
          <HStack space={9}>
            <NumberButton>.</NumberButton>
            <NumberButton>0</NumberButton>
            <NumberButton isDelete>
              <Icon
                as={<MaterialIcons />}
                name="backspace"
                color="danger.700"
                size="xl"
              />
            </NumberButton>
          </HStack>
        </VStack>

        <VStack mt={12} mb={16} pb={2} space={4}>
          <Button
            variant="link"
            _text={{
              fontFamily: 'body',
              fontWeight: 'bold',
              fontSize: 'sm',
              color: '_primary.500',
            }}
          >
            Add Description
          </Button>
          <Button
            bgColor="_primary.500"
            rounded="xl"
            shadow={3}
            android_ripple={{
              color: '#fff4',
            }}
            _text={{
              fontFamily: 'body',
              fontWeight: 'bold',
              fontSize: 'lg',
              color: '_neutral.50',
            }}
          >
            Confirm
          </Button>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default TransferValue;
