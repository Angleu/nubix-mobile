import {
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import LogoImage from '../../assets/images/logo.png';
import Container from '../components/layout/Container';

// TODO: Add react hook form here
const Login = () => {
  return (
    <Container>
      <Center>
        <Image source={LogoImage} alt="Tique Bank Logo" />
      </Center>

      <Heading>Aceder a conta</Heading>

      <FormControl>
        <VStack>
          <FormControl.Label>EMAIL</FormControl.Label>
          <Input placeholder="example@mail.com" />
          <FormControl.ErrorMessage>Email inválido</FormControl.ErrorMessage>
        </VStack>
      </FormControl>
      <FormControl>
        <VStack>
          <FormControl.Label>PASSWORD</FormControl.Label>
          <Input secureTextEntry />
          <FormControl.ErrorMessage>Password inválida</FormControl.ErrorMessage>
        </VStack>
      </FormControl>

      <HStack>
        <Switch />
        <Text>Iniciar sessão automaticamente</Text>
      </HStack>

      <VStack>
        <Button>Entrar</Button>
        <Button>Criar Conta</Button>
      </VStack>

      {/* TODO: Place other login methods here */}
    </Container>
  );
};

export default Login;
