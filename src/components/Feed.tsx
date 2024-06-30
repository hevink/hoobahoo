import ProfileLogo from "../assets/icons/Profile.svg";
import Star from "../assets/icons/Star.svg";
import Menu from "../assets/icons/Menu.svg";
import Post from "../assets/icons/Post.svg";
import Like from "../assets/icons/Like.svg";
import Comment from "../assets/icons/Comment.svg";
import FeedCarousel from "./Feed/FeedCarousel";
import TilesCarousel from "./Feed/TilesCarousel";

const Feed = () => {
  return (
    <div className="px-4">
      <div className="max-w-xl mx-auto text-white p-4 rounded-lg shadow-md border-l border-[#232323]">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src={ProfileLogo}
                alt="User profile"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-lg font-semibold">Varun Sharma</h2>
                  <img src={Star} />
                  <p className="font-normal text-sm text-[#B4B4B4]">1d</p>
                </div>
                <p className="font-normal text-sm text-[#B4B4B4]">
                  @Itzz_Vxrun_1880
                </p>
              </div>
            </div>
          </div>
          <img src={Menu} />
        </div>
        <p className="mt-4">Smile A Little More, Regret A Little Less.</p>
        <div className="mt-2 text-blue-400">
          <span className="mr-2">#smile</span>
          <span className="mr-2">#happiness</span>
          <span>#worryless</span>
        </div>
        <div className="mt-4">
          <img className="rounded-lg" src={Post} alt="Tweet content" />
        </div>
        <div className="mt-4 flex space-x-8">
          <div className="flex items-center space-x-2">
            <img src={Like} />
            <span>203</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Comment} />
            <span>64</span>
          </div>
        </div>
      </div>
      <FeedCarousel />
      <TilesCarousel />
    </div>
  );
};

export default Feed;
