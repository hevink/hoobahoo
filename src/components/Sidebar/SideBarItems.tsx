import HomeIcon from "../../assets/icons/HomeIcon.svg";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import ChatIcon from "../../assets/icons/ChatIcon.svg";
import CreatePostIcon from "../../assets/icons/CreatePostIcon.svg";
import NotificationIcon from "../../assets/icons/NotificationIcon.svg";

const routes = [
  {
    icon: HomeIcon,
    text: "Home",
  },
  {
    icon: SearchIcon,
    text: "Search",
  },
  {
    icon: CreatePostIcon,
    text: "Create Post",
  },
  {
    icon: NotificationIcon,
    text: "Notifications",
  },
  {
    icon: ChatIcon,
    text: "Chat",
  },
];
const SideBarItems = () => {
  return (
    <div className="flex flex-col w-full space-y-4">
      {routes.map((route) => (
        <div
          className="flex items-center gap-8 p-2 mr-2 rounded-lg cursor-pointer hover:bg-[#333]"
          key={route.text}
        >
          <div className="flex items-center justify-center w-9 h-9">
            <img src={route.icon} alt={route.text} />
          </div>
          <p className="text-2xl text-white ">{route.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBarItems;
