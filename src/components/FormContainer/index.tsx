import React from "react";
import { FormNavigationManager } from "./FormNavigationManager";
import { FormValidationManager } from "./FormValidationManager";

import Buttons from "./Buttons";
import SuccessMessage from "./FormStepsContainer/successMessage";
import { FormStepsContainer } from "./FormStepsContainer";
import StepCounter from "./StepCounter";

export interface FormValues {
  userNameInput: string;
  password: string;
  email: string;
}
const FormContainer: React.FC = () => {
  const { step, handleNextStep, handlePreviousStep } = FormNavigationManager();
  const { register, handleSubmit, errors, triggerValidation } =
    FormValidationManager();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Form Submitted!");
    handleNextStep();
  };

  return (
    <div className="mt-[10vh] mx-auto max-w-[600px] w-[90vw] shadow-[0px_0px_3px_#00000047] pt-[50px] pb-[20px] rounded-[15px] h-[530px]">
      {step !== 4 ? <StepCounter currentStep={step} totalSteps={3} /> : ""}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto p-4 flex flex-col justify-between h-[405px]"
      >
        {step === 4 ? (
          <SuccessMessage />
        ) : (
          <FormStepsContainer step={step} register={register} errors={errors} />
        )}
        <Buttons
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          triggerValidation={triggerValidation}
        />
      </form>
    </div>
  );
};

export default FormContainer;
