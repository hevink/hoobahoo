import Logo from "../Logo";
import SideBarItems from "./SideBarItems";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between w-80 border-r border-[#232323] mx-2">
      <div className="mt-11">
        <div className="mb-14">
          <Logo />
        </div>
        <SideBarItems />
        <div className="border-gradient p-0.5 rounded-full mt-14">
          <button className="text-xl text-white py-3.5 px-7 rounded-full bg-[#1e1e1e]">
            Get Premium
          </button>
        </div>
      </div>
      <div className="mb-5">
        <button className="text-bold text-lg text-white py-4 px-12 bg-[#C171EB] rounded-full mb-5">
          Log In
        </button>
        <p className="text-[15px] text-white ">
          Don’t have an account ? <span className="font-bold cursor-pointer"> Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
