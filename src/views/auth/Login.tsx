import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Network from 'expo-network';
import {
  AlertDialog,
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
import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import LogoImage from '../../../assets/images/logo.png';
import Container from '../../components/layout/Container';
import { useUser } from '../../hooks';
import { AuthStackScreenProps } from '../../routes/types';
import { androidRippleEffect } from '../../utils/theme/style';
import loginSchema, { LoginFormType } from '../../utils/validation/loginSchema';

const Login: FC<AuthStackScreenProps<'Login'>> = ({ route, navigation }) => {
  const params = route.params;
  const { push } = navigation;

  const [rememberUser, setRememberUser] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const { signIn } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormType) => {
    await signIn(email as string, password as string, rememberUser);
  };

  return (
    <Container>
      {params && (
        <AlertDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          leastDestructiveRef={undefined}
        >
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header
              borderBottomWidth={0}
              _text={{
                color: params.signUpSuccess ? 'primary.100' : 'danger.700',
              }}
            >
              {params.signUpSuccess
                ? 'Conta Criada'
                : 'Erro na Criação de Conta'}
            </AlertDialog.Header>
            <AlertDialog.Body>
              {params.signUpSuccess
                ? 'Parabéns! Já possui uma conta na Nubix. Faça o login para continuar'
                : params.errorMessage}
            </AlertDialog.Body>
            <AlertDialog.Footer borderTopWidth={0}>
              <Button
                variant="unstyled"
                _text={{
                  color: 'primary.100',
                }}
                onPress={() => setIsOpen(false)}
              >
                Ok
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      )}

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
                  autoCapitalize="none"
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
            onPress={async () => {
              const { isInternetReachable } =
                await Network.getNetworkStateAsync();
              if (!isInternetReachable) {
                Alert.alert(
                  'Erro de conexão',
                  'Tem que estar ligado a internet para continuar'
                );
                return;
              }
              handleSubmit(onSubmit);
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
            _pressed={{
              bg: 'light.50',
            }}
            onPress={async () => {
              const { isInternetReachable } =
                await Network.getNetworkStateAsync();
              if (!isInternetReachable) {
                Alert.alert(
                  'Erro de conexão',
                  'Tem que estar ligado a internet para continuar'
                );
                return;
              }
              push('SignUpStepOne');
            }}
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
