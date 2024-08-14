import React from "react";
import UserName from "./UserName";
import Password from "./Password";
import Email from "./Email";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormValues } from "./index";

interface FormStepProps {
  step: number;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export const FormStep: React.FC<FormStepProps> = ({
  step,
  register,
  errors,
}) => {
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <UserName register={register} errors={errors} />;
      case 2:
        return <Password register={register} errors={errors} />;
      case 3:
        return <Email register={register} errors={errors} />;
      default:
        return null;
    }
  };

  return <div>{renderStepContent()}</div>;
};
