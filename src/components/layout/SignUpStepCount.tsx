import { HStack, Text } from 'native-base';
import { FC } from 'react';

type Props = {
  numberOfSteps: number;
  currentStepIndex?: number;
};

const SignUpStepCount: FC<Props> = ({
  currentStepIndex = 0,
  numberOfSteps,
}) => {
  const steps = Array(numberOfSteps).fill(1);
  return (
    <HStack justifyContent="center" space="7" mt="2" mb="4">
      {steps.map((_, index) => (
        <Text
          key={index}
          color={currentStepIndex == index ? 'white' : 'primary.100'}
          fontFamily="body"
          fontWeight="semibold"
          fontSize="lg"
          px="4"
          py="2"
          bg={currentStepIndex != index ? 'white' : 'primary.100'}
          borderRadius="lg"
          borderColor="primary.100"
          borderWidth="1"
        >
          {index + 1}
        </Text>
      ))}
    </HStack>
  );
};

export default SignUpStepCount;
