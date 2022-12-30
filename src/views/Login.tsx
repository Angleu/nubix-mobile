import { MaterialIcons } from '@expo/vector-icons';
import {
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import LogoImage from '../../assets/images/logo.png';
import Container from '../components/layout/Container';
import { androidRippleEffect } from '../utils/theme/style';

// TODO: Add react hook form here
const Login = () => {
  return (
    <Container>
      <Center>
        <Image source={LogoImage} alt="Tique Bank Logo" />
        <Heading
          my="25"
          fontFamily="heading"
          fontSize="md"
          textTransform="uppercase"
        >
          Aceder a conta
        </Heading>
      </Center>

      <FormControl isRequired mb="4">
        <VStack>
          <FormControl.Label>
            <Text fontSize="sm" color="light.500">
              EMAIL
            </Text>
          </FormControl.Label>
          <Input
            placeholder="example@mail.com"
            borderColor="primary.100"
            _focus={{
              bg: 'light.50',
              borderColor: 'primary.100',
            }}
            leftElement={
              <Icon
                name="email"
                as={MaterialIcons}
                color="primary.100"
                ml="3"
                size="lg"
              />
            }
          />
          <FormControl.ErrorMessage>Email inválido</FormControl.ErrorMessage>
        </VStack>
      </FormControl>
      <FormControl isRequired mb="4">
        <VStack>
          <FormControl.Label>
            <Text fontSize="sm" color="light.500">
              PASSWORD
            </Text>
          </FormControl.Label>
          <Input
            secureTextEntry
            borderColor="primary.100"
            _focus={{
              bg: 'light.50',
              borderColor: 'primary.100',
            }}
            leftElement={
              <Icon
                name="lock"
                as={MaterialIcons}
                color="primary.100"
                ml="3"
                size="lg"
              />
            }
          />
          <FormControl.ErrorMessage>Password inválida</FormControl.ErrorMessage>
        </VStack>
      </FormControl>

      <HStack alignItems="center" mb="6" space="2">
        <Switch
          isChecked
          size="sm"
          onTrackColor="primary.50"
          onThumbColor="primary.100"
        />
        <Text opacity={0.7} fontSize="sm">
          Iniciar sessão automaticamente
        </Text>
      </HStack>

      <VStack space="5">
        <Button
          py="3"
          bg="primary.100"
          borderRadius="lg"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'primary.100',
          }}
        >
          Entrar
        </Button>
        <Button
          variant="outline"
          py="3"
          color="primary.100"
          borderRadius="lg"
          _text={{
            color: 'primary.100',
          }}
          borderColor="primary.100"
          android_ripple={androidRippleEffect}
          shadow="3"
          _pressed={{
            bg: 'light.50',
          }}
        >
          Criar Conta
        </Button>
      </VStack>

      {/* TODO: Place other login methods here */}
    </Container>
  );
};

export default Login;
