import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { subYears } from 'date-fns';
import {
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  ScrollView,
  Text,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { checkFiscalNumber } from '../api/user';
import { StepOne, StepThree, StepTwo } from '../components/form/CreateAccount';
import Container from '../components/layout/Container';
import LoadingModal from '../components/modal/LoadingModal';
import useStepper from '../hooks/useStepper';
import { androidRippleEffect } from '../utils/theme/style';
import signUpSchema, { SignUpFormType } from '../utils/validation/signUpSchema';

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);

  const methods = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      personalInfo: {
        birthDate: subYears(new Date(), 17),
      },
    },
  });
  const { goBack } = useNavigation();
  const { currentStep, incrementStep, decrementStep } = useStepper();

  const steps = useMemo(
    () => [<StepOne key={1} />, <StepTwo key={2} />, <StepThree key={3} />],
    []
  );

  const stepsGroupName = ['stepOne', 'personalInfo', 'address'];

  const goToNextStep = async () => {
    await methods.trigger(
      stepsGroupName[currentStep] as 'stepOne' | 'personalInfo' | 'address'
    );

    if (currentStep === 0) {
      const password = methods.getValues('stepOne.password');
      const passwordConfirmation = methods.getValues('stepOne.confirmPassword');
      if (password !== passwordConfirmation) {
        methods.setError('stepOne.password', {
          message: 'As duas passwords devem ser iguais',
        });
        methods.setError('stepOne.confirmPassword', {
          message: 'As duas passwords devem ser iguais',
        });
      }
    } else if (currentStep === 1) {
      const nif = methods.getValues('personalInfo.nif');
      const firstName = methods.getValues('personalInfo.firstName');
      const lastName = methods.getValues('personalInfo.lastName');

      const inferredFullName = firstName + ' ' + lastName;
      try {
        setLoading(true);
        const { name } = await checkFiscalNumber(nif);
        if (!name.toLowerCase().includes(inferredFullName.toLowerCase())) {
          Alert.alert(
            'Nome Inválido',
            'O nome inserido não corresponde com o nome do NIF'
          );
          methods.resetField('personalInfo.nif');
          methods.resetField('personalInfo.firstName');
          methods.resetField('personalInfo.lastName');
        }
      } catch (error) {
        methods.setError('personalInfo.nif', {
          message: error.message,
        });
      } finally {
        setLoading(false);
      }
    }

    if (Object.keys(methods.formState.errors).length === 0) {
      incrementStep();
      return;
    }
  };

  const goToPreviousStep = () => {
    methods.clearErrors();
    decrementStep();
  };

  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <LoadingModal isOpen={isLoading} text="Validando o NIF..." />
        <HStack>
          <IconButton
            borderRadius="full"
            _pressed={{
              bg: 'light.50',
            }}
            icon={<Icon as={<Ionicons name="arrow-back-circle-outline" />} />}
            _icon={{
              color: 'dark.50',
              size: '4xl',
            }}
            onPress={() => (currentStep === 0 ? goBack() : goToPreviousStep())}
          />
        </HStack>
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <HStack justifyContent="center" space="7" mt="2" mb="4">
            {steps.map((_, index) => (
              <Text
                key={index}
                color={currentStep == index ? 'white' : 'primary.100'}
                fontFamily="body"
                fontWeight="semibold"
                fontSize="lg"
                px="4"
                py="2"
                bg={currentStep != index ? 'white' : 'primary.100'}
                borderRadius="lg"
                borderColor="primary.100"
                borderWidth="1"
              >
                {index + 1}
              </Text>
            ))}
          </HStack>
          <Heading
            textAlign="center"
            textTransform="uppercase"
            fontFamily="heading"
            fontSize="2xl"
            color="primary.100"
          >
            Criar Conta
          </Heading>
          {
            ['Preencha Todos os campos', 'Dados Pessoais', 'Endereço'].map(
              (text, index) => (
                <Text
                  key={index}
                  textAlign="center"
                  fontFamily="body"
                  fontSize="lg"
                  color="primary.100"
                  mb="6"
                >
                  {text}
                </Text>
              )
            )[currentStep]
          }

          {steps[currentStep]}

          {currentStep < steps.length - 1 ? (
            <Button
              mb="4"
              py="3"
              bg="primary.100"
              borderRadius="lg"
              android_ripple={androidRippleEffect}
              shadow="3"
              _pressed={{
                bg: 'primary.100',
              }}
              onPress={goToNextStep}
            >
              Continuar
            </Button>
          ) : (
            <Button
              my="4"
              py="3"
              bg="primary.100"
              borderRadius="lg"
              android_ripple={androidRippleEffect}
              shadow="3"
              _pressed={{
                bg: 'primary.100',
              }}
              onPress={methods.handleSubmit(onSubmit)}
            >
              Terminar
            </Button>
          )}
        </ScrollView>
      </FormProvider>
    </Container>
  );
};

export default SignUp;
