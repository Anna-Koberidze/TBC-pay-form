import checkCircle from "/src/assets/images/check-circle-fill.svg";
const SuccessMessage: React.FC = () => {
  return (
    <div className="h-full flex items-center justify-center gap-20 flex-col ">
      <img src={checkCircle} alt="success icon" width="90" height="90" />
      <h1 className="text-center font-medium text-blue-700">
        თქვენ წარმატებით გაიარეთ მოცემული ფორმის საფეხურები!
      </h1>
    </div>
  );
};
export default SuccessMessage;
