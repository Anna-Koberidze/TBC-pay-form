import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormValues } from "./index";

interface EmailProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

const Email: React.FC<EmailProps> = ({ register, errors }) => {
  return (
    <div>
      <label className="block text-black text-sm font-light mt-5 mb-3">
        ელ ფოსტა
      </label>
      <input
        type="email"
        {...register("email", {
          required: "ველის შევსება სავალდებულოა",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "გთხოვთ გამოიყენოთ სწორი იმეილის ფორმატი",
          },
        })}
        className="block w-full border border-black rounded-md p-2.5 mb-3 text-sm"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
  );
};

export default Email;
