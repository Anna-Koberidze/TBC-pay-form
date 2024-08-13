interface ButtonsProps {
  handleBack: () => void;
  handleNext: () => void;
  step: number;
}

const Buttons: React.FC<ButtonsProps> = ({ handleNext, handleBack, step }) => {
  return (
    <>
      {step !== 4 ? (
        <div className="flex flex-col gap-3 w-full items-center justify-center mt-10">
          <button
            type="button"
            onClick={handleNext}
            className="bg-pink-500 text-white px-4 py-2 rounded-md max-w-xs w-full h-14"
          >
            {step === 3 ? "გაგზავნა" : "შემდეგი"}
          </button>

          <button
            type="button"
            onClick={() => handleBack()}
            className="bg-gray-400 text-white px-4 py-2 rounded-md max-w-xs w-full h-14"
          >
            უკან
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Buttons;
