import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserName from "./UserName";
import Password from "./Password";
import Email from "./Email";
import SuccessMessage from "./successMessage";
import Buttons from "./Buttons";
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
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      userNameInput: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Form Submitted!");
    nextStep();
  };

  const nextStep = async () => {
    const result = await trigger(); // Validate the current step
    if (result) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      setIsFormContainerOpen(false);
    } else {
      setStep((prev) => prev - 1);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4">
      {step === 1 && <UserName register={register} errors={errors} />}
      {step === 2 && <Password register={register} errors={errors} />}
      {step === 3 && <Email register={register} errors={errors} />}
      {step === 4 && <SuccessMessage />}
      <Buttons
        step={step}
        handleNext={() => nextStep()}
        handleBack={() => handleBack()}
      />
    </form>
  );
};

export default FormContainer;
