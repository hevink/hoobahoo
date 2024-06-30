import ProfileLogo from "../assets/icons/Profile.svg";
import Profile2 from "../assets/icons/Profile2.svg";
import Profile3 from "../assets/icons/Profile3.svg";
import Star from "../assets/icons/Star.svg";
import Menu from "../assets/icons/Menu.svg";
import PostImage from "../assets/icons/Post.svg";
import PostImage1 from "../assets/icons/Post1.svg";
import ImagePost from "../assets/icons/imagePost.svg";

import Like from "../assets/icons/Like.svg";
import Comment from "../assets/icons/Comment.svg";
import FeedCarousel from "./Feed/FeedCarousel";
import TilesCarousel from "./Feed/TilesCarousel";

const posts = [
  {
    id: 1,
    profileImage: ProfileLogo,
    name: "Varun Sharma",
    handle: "@Itzz_Vxrun_1880",
    time: "1d",
    content: "Smile A Little More, Regret A Little Less.",
    hashtags: ["#smile", "#happiness", "#worryless"],
    postImage: PostImage1,
    likes: 203,
    comments: 64,
    hasStar: true,
  },
  {
    id: 2,
    profileImage: Profile2,
    name: "Amrapali Patil",
    handle: "@wonderlust_45.ai",
    time: "1d",
    content:
      "Embracing the chaos of creativity today! 🎨✨ Letting my imagination run wild and seeing where it takes me.",
    hashtags: ["#MondayMotivation", "#Creativity"],
    likes: 203,
    comments: 64,
    hasStar: false,
  },
  {
    id: 3,
    profileImage: Profile3,
    name: "Sargun Sahi",
    handle: "@sparkling_sahi78",
    time: "1d",
    content: "Can’t believe, One year to this picture",
    hashtags: ["#college", "#memories", "#youngme"],
    postImage: PostImage,
    likes: 203,
    comments: 64,
    hasStar: false,
  },
];

const Feed = () => {
  return (
    <div className="mt-14 sm:mt-0">
      <div className="relative mt-14 mb-6">
        <img
          src={ImagePost}
          className="absolute top-[50%] translate-y-[-50%] right-5"
        />
        <input
          placeholder="Post something here... "
          className="rounded-full bg-[#3F3F3F6E] p-2 w-full"
        />
      </div>
      {posts.map((post) => (
        <div key={post.id}>
          <div className="max-w-xl mx-auto text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={post.profileImage}
                    alt="User profile"
                  />
                  <div>
                    <div className="flex gap-2 items-center">
                      <h2 className="text-lg font-semibold">{post.name}</h2>
                      {post.hasStar && <img src={Star} alt="Star" />}
                      <p className="font-normal text-sm text-[#B4B4B4]">
                        {post.time}
                      </p>
                    </div>
                    <p className="font-normal text-sm text-[#B4B4B4]">
                      {post.handle}
                    </p>
                  </div>
                </div>
              </div>
              <img src={Menu} alt="Menu" />
            </div>
            <p className="mt-4 font-normal text-base sm:text-xl">
              {post.content}
            </p>
            <div className="mt-2 font-normal text-lg sm:text-xl">
              {post.hashtags.map((tag, index) => (
                <span key={index} className="mr-2">
                  {tag}
                </span>
              ))}
            </div>
            {post.postImage && (
              <div className="mt-4">
                <img
                  className="rounded-lg"
                  src={post.postImage}
                  alt="Post content"
                />
              </div>
            )}
            <div className="mt-4 flex space-x-8">
              <div className="flex items-center space-x-2">
                <img src={Like} alt="Like" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={Comment} alt="Comment" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
          <div className="border border-[#1c1c1c] w-full text-[#D4D4D41A]" />
        </div>
      ))}
      <FeedCarousel />
      <TilesCarousel />
    </div>
  );
};

export default Feed;
