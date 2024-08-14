import useStore from "../../store/useStore";
import arrowLeft from "/src/assets/images/arrow-left-bold.svg";
interface ButtonsProps {
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  step: number;

  triggerValidation: () => Promise<boolean>;
}

const Buttons: React.FC<ButtonsProps> = ({
  handleNextStep,
  handlePreviousStep,
  step,

  triggerValidation,
}) => {
  const handleNext = async () => {
    const isValid = await triggerValidation();
    if (isValid) {
      handleNextStep();
    }
  };
  const { setIsFormContainerOpen } = useStore();
  return (
    <>
      {step !== 4 ? (
        <div className="flex flex-col gap-3 w-full items-center justify-center">
          <button
            type="button"
            onClick={handleNext}
            className="bg-pink-500 font-bold text-white px-4 py-2 rounded-md max-w-xs w-full h-14"
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
            <img src={arrowLeft} alt="back icon" width="30" height="30" />
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
