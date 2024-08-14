import React from "react";
import { FormNavigationManager } from "./FormNavigationManager";
import { FormValidationManager } from "./FormValidationManager";

import Buttons from "./Buttons";
import SuccessMessage from "./stepComponents/successMessage";
import { FormStep } from "./FormStep";
import StepCounter from "./StepCounter";

interface FormContainerProps {
  setIsFormContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormValues {
  userNameInput: string;
  password: string;
  email: string;
}
const FormContainer: React.FC<FormContainerProps> = ({
  setIsFormContainerOpen,
}) => {
  const { step, handleNextStep, handlePreviousStep } = FormNavigationManager();
  const { register, handleSubmit, errors, triggerValidation } =
    FormValidationManager();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Form Submitted!");
    handleNextStep();
  };

  return (
    <div className=" mt-36">
      {step !== 4 ? <StepCounter currentStep={step} totalSteps={3} /> : ""}

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
        {step === 4 ? (
          <SuccessMessage />
        ) : (
          <FormStep step={step} register={register} errors={errors} />
        )}
        <Buttons
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          setIsFormContainerOpen={setIsFormContainerOpen}
          triggerValidation={triggerValidation}
        />
      </form>
    </div>
  );
};

export default FormContainer;
