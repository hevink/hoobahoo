import HomeIcon from "../assets/icons/MobileHome.svg";
import SearchIcon from "../assets/icons/MobileSearch.svg";
import ChatIcon from "../assets/icons/MobileChat.svg";
import CreatePostIcon from "../assets/icons/MobileMessage.svg";
import NotificationIcon from "../assets/icons/MobileProfile.svg";

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-around py-2 md:hidden">
      <div className="flex flex-col items-center">
        <img src={HomeIcon} alt="Home" className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center">
        <img src={SearchIcon} alt="Search" className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center">
        <img src={ChatIcon} alt="Reel" className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center">
        <img src={CreatePostIcon} alt="Like" className="w-6 h-6" />
      </div>
      <div className="flex flex-col items-center">
        <img src={NotificationIcon} alt="Profile" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default MobileFooter;
