interface ButtonsProps {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  step: number;
  setIsFormContainerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerValidation: () => Promise<boolean>;
}

const Buttons: React.FC<ButtonsProps> = ({
  handleNextStep,
  handlePreviousStep,
  step,
  setIsFormContainerOpen,
  triggerValidation,
}) => {
  const handleNext = async () => {
    const isValid = await triggerValidation();
    if (isValid) {
      handleNextStep();
    }
  };
  return (
    <>
      {step !== 4 ? (
        <div className="flex flex-col gap-3 w-full items-center justify-center mt-20">
          <button
            type="button"
            onClick={handleNext}
            className="bg-pink-500 text-white px-4 py-2 rounded-md max-w-xs w-full h-14"
          >
            {step === 3 ? "გაგზავნა" : "შემდეგი"}
          </button>

          <button
            type="button"
            onClick={
              step === 1
                ? () => setIsFormContainerOpen(false)
                : () => handlePreviousStep()
            }
            className="bg-none text-pink-500 font-bold px-4 py-2 rounded-md max-w-xs w-full h-14 flex items-center justify-center flex-row gap-2 relative right-5"
          >
            <img
              src="/src/assets/images/arrow-left-bold.svg"
              alt="back icon"
              width="30"
              height="30"
            />
            <span>უკან</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Buttons;
