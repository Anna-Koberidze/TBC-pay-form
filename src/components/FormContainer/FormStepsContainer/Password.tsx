import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "../index";

interface PasswordProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const Password: React.FC<PasswordProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-black text-sm font-light mt-5 mb-3">
        პაროლი
      </label>
      <input
        type="password"
        {...register("password", {
          required: "ველის შევსება სავალდებულოა",
          minLength: {
            value: 3,
            message:
              "პაროლის ასოების რაოდენობა უნდა იყოს არაუმეტეს 20-სა და არანაკლებ 3",
          },
          maxLength: {
            value: 20,
            message:
              "პაროლის ასოების რაოდენობა უნდა იყოს არაუმეტეს 20-სა და არანაკლებ 3",
          },
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
            message:
              "პაროლი უნდა შეიცავდეს მინიმუმ 1 რიცხვს ან უცხო სიმბოლოს და მინიმუმ 1 ლათინურ მთავრულ ასოს, მაგალითად: P@ssword",
          },
          validate: (value) =>
            value !== "P@ssword" ||
            'თქვენს მიერ შეყვანილი პაროლი უდრის ნიმუშად მოწოდებულ პაროლს , კერძოდ "P@ssword" , გთხოვთ შეიყვანეთ უნიკალური პაროლი',
        })}
        className="block w-full border border-black rounded-md p-2.5 mb-3 text-sm border border-gray-300 focus:outline-none focus:border-gray-500 "
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
    </div>
  );
};

export default Password;
