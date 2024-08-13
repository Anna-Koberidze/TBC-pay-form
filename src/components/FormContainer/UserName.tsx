import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "./index";

interface UserNameProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const UserName: React.FC<UserNameProps> = ({ register, errors }) => {
  console.log(errors);
  return (
    <div>
      <label className="block text-black text-sm font-light mt-5 mb-3">
        მომხმარებლის სახელი
      </label>
      <input
        {...register("userNameInput", {
          required: "ველის შევსება სავალდებულოა",
          minLength: {
            value: 3,
            message:
              "მომხმარებლის სახელის ასოების რაოდენობა უნდა იყოს არაუმეტეს 20-სა და არანაკლებ 3",
          },
          maxLength: {
            value: 20,
            message:
              "მომხმარებლის სახელის ასოების რაოდენობა უნდა იყოს არაუმეტეს 20-სა და არანაკლებ 3",
          },
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            message:
              "მომხმარებლის სახელი უნდა შედგებოდეს მხოლოდ რიცხვებისა და ლათინური ასოებისგან",
          },
        })}
        className="block w-full border border-black rounded-md p-2.5 mb-3 text-sm"
      />
      {errors.userNameInput && (
        <p className="text-red-500">{errors.userNameInput.message}</p>
      )}
    </div>
  );
};

export default UserName;
