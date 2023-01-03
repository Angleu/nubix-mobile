import { useState } from 'react';

export type UseStepper = () => UseStepperReturnType;

type UseStepperReturnType = {
  currentStep: number;
  incrementStep: () => void;
  decrementStep: () => void;
};

const useStepper: UseStepper = () => {
  const [step, setStep] = useState(0);

  const incrementStep = () => setStep((oldValue) => oldValue + 1);
  const decrementStep = () => setStep((oldValue) => oldValue - 1);
  return {
    currentStep: step,
    incrementStep,
    decrementStep,
  };
};

export default useStepper;
