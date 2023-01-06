import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  ScrollView,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import LogoImage from '../../assets/images/logo.png';
import Container from '../components/layout/Container';
import { AuthStackNavigationProps } from '../routes/types';
import { androidRippleEffect } from '../utils/theme/style';
import loginSchema, { LoginFormType } from '../utils/validation/loginSchema';

const Login = () => {
  const [rememberUser, setRememberUser] = useState();

  const { push } = useNavigation<AuthStackNavigationProps<'Login'>>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data);
  };

  return (
    <Container>
      <ScrollView>
        <Center>
          <Image source={LogoImage} alt="Nubix Logo" h="56" />
          <Heading
            my="25"
            fontFamily="heading"
            fontSize="md"
            textTransform="uppercase"
          >
            Aceder a conta
          </Heading>
        </Center>

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl isRequired isInvalid={!!errors.email} mb="4">
              <VStack>
                <FormControl.Label>
                  <Text fontSize="sm" color="light.500">
                    EMAIL
                  </Text>
                </FormControl.Label>
                <Input
                  _ios={{
                    py: '4',
                  }}
                  keyboardType="email-address"
                  value={value}
                  onChangeText={onChange}
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
                <FormControl.ErrorMessage>
                  {errors.email && errors.email.message}
                </FormControl.ErrorMessage>
              </VStack>
            </FormControl>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl isRequired isInvalid={!!errors.password} mb="4">
              <VStack>
                <FormControl.Label>
                  <Text fontSize="sm" color="light.500">
                    PASSWORD
                  </Text>
                </FormControl.Label>
                <Input
                  _ios={{
                    py: '4',
                  }}
                  value={value}
                  onChangeText={onChange}
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
                <FormControl.ErrorMessage>
                  {errors.password && errors.password.message}
                </FormControl.ErrorMessage>
              </VStack>
            </FormControl>
          )}
        />

        <HStack alignItems="center" mb="6" space="2">
          <Switch
            value={rememberUser}
            onToggle={(value) => setRememberUser(value)}
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
            onPress={handleSubmit(onSubmit)}
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
            _pressed={{
              bg: 'light.50',
            }}
            onPress={() => push('SignUp')}
          >
            Criar Conta
          </Button>
        </VStack>

        {/* TODO: Place other login methods here */}
      </ScrollView>
    </Container>
  );
};

export default Login;
