import useStore from "../store/useStore";
import newLogo from "/src/assets/images/new-logo.svg";
import houseFill from "/src/assets/images/house-fill.svg";
const Header: React.FC = () => {
  const { setIsFormContainerOpen } = useStore();
  return (
    <>
      <div className="w-full sticky top-0 right-0 left-0 z-40 bg-white ">
        <div className="container flex items-center justify-between py-3 mx-auto">
          <img
            src={newLogo}
            alt="logo"
            className="w-24 md:w-40"
            width="164"
            height="44"
          />
          <div
            onClick={() => setIsFormContainerOpen(false)}
            className="cursor-pointer inline-block rounded-lg bg-pink-500 px-4 py-2 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-80 flex items-center gap-2"
          >
            <img src={houseFill} alt="logo" width="20" height="20" />
            <span>მთავარი</span>
          </div>
        </div>
        <div className="bg-blue-700 min-h-12"></div>
      </div>
    </>
  );
};
export default Header;
