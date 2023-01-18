import { MaterialIcons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import * as Network from 'expo-network';
import {
  AlertDialog,
  Button,
  Center,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Switch,
  Text,
  VStack,
} from 'native-base';
import React, { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import LogoImage from '../../../assets/images/logo.png';
import Input from '../../components/form/inputs/Input';
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
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  console.log(isSubmitting);

  const onSubmit = async ({ email, password }: LoginFormType) => {
    console.log(email);
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
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              label="Email"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              keyboardType="email-address"
              errorMessage={errors?.email?.message}
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
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <Input
              label="Password"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureText
              errorMessage={errors?.password?.message}
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
            isDisabled={!isValid || !isDirty}
            isLoading={isSubmitting}
            py="3"
            bg="primary.100"
            borderRadius="lg"
            android_ripple={androidRippleEffect}
            shadow="3"
            _pressed={{
              bg: 'primary.100',
              opacity: 90,
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
