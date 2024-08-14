import { useState } from "react";

export const FormNavigationManager = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  return { step, handleNextStep, handlePreviousStep };
};
