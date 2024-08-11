import { useForm } from "react-hook-form";

function FormContainer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: "",
    },
  });

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
        className="max-w-lg mx-auto p-4"
      >
        <label className="block text-black text-sm font-light mt-5 mb-3">
          Example
        </label>
        <input
          {...register("example")}
          defaultValue="test"
          className="block w-full border border-black rounded-md p-2.5 mb-3 text-sm"
        />

        <label className="block text-black text-sm font-light mt-5 mb-3">
          ExampleRequired
        </label>
        <input
          {...register("exampleRequired", { required: true, maxLength: 10 })}
          className="block w-full border border-black rounded-md p-2.5 mb-3 text-sm"
        />

        {errors.exampleRequired && <p>This field is required</p>}

        <input
          type="submit"
          className=" cursor-pointer bg-pink-500 text-white w-full uppercase border-none mt-10 py-5 px-8 text-base font-thin tracking-widest rounded-md transition-transform duration-300 transform hover:bg-pink-500 active:translate-y-0.5 active:opacity-80"
        />
      </form>
    </>
  );
}
export default FormContainer;
