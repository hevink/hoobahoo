import NotificationIcon from "../assets/icons/NotificationIcon.svg";
import Logo from "../assets/icons/MobileLogo.svg";

const MobileHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white flex justify-between items-center px-2 py-2 md:hidden">
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Notification" />

        <div className="border-gradient p-0.5 rounded-full">
          <button className="text-sm text-white px-1 py-1 rounded-full bg-[#1e1e1e]">
            Get Premium
          </button>
        </div>
      </div>
      <img src={NotificationIcon} alt="Notification" className="w-6 h-6" />
    </div>
  );
};

export default MobileHeader;
