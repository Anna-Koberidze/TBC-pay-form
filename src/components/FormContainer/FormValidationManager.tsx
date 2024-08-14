import { useForm } from "react-hook-form";

export const FormValidationManager = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      userNameInput: "",
      password: "",
      email: "",
    },
  });

  const triggerValidation = async () => {
    return await trigger();
  };

  return { register, handleSubmit, errors, triggerValidation };
};
