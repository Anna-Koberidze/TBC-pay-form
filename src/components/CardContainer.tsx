import useStore from "../store/useStore";

const CardContainer: React.FC = () => {
  const { setIsFormContainerOpen } = useStore();
  return (
    <div className="w-full flex items-center justify-center h-[60vh]">
      <div
        className="swiper-slide ml-5 last-of-type:mr-5 swiper-slide-next"
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          width: "12.125rem",
        }}
      >
        <div
          className="group flex flex-grow flex-col overflow-hidden rounded-md md:border md:border-gray-300 cursor-pointer"
          onClick={() => {
            setIsFormContainerOpen(true);
          }}
        >
          <div className="broder flex h-44 items-center justify-center bg-white/70 text-blue-700/70 group-hover:bg-white/70 md:bg-gray-200/70">
            <img
              src="/src/assets/images/clipboard-text.svg"
              alt="icon"
              className="w-24 md:w-58"
              width="58"
              height="58"
            />
          </div>
          <div className="mx-4 h-px bg-gray-300 md:mx-0"></div>
          <div className="flex-grow bg-white/70 px-3 py-4">
            <h3>
              <span className="font-mtavruli font-medium text-blue-700">
                ფორმა
              </span>
              <br />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardContainer;
