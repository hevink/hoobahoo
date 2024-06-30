import { FC } from "react";
import FollowersIcon from "../../assets/icons/FollowersIcon.svg";

type SuggestFriendCardProps = {
  user_image: string;
  user_name: string;
  user_username: string;
  description: string;
  followers: string;
};

const SuggestFriendCard: FC<SuggestFriendCardProps> = ({
  description,
  followers,
  user_image,
  user_name,
  user_username,
}) => {
  return (
    <div className="bg-[#222222] rounded-xl w-[220px] px-4 py-3">
      <img src={user_image} alt="user_image" className="rounded-xl mx-auto" />
      <p className="text-white font-bold text-lg text-center mt-2">
        {user_name}
      </p>
      <p className="text-white text-sm mt-3">{description}</p>
      <div className="flex items-center justify-between mt-3">
        <p className="text-[#909090]">{user_username}</p>
        <div className="flex items-center">
          <img src={FollowersIcon} alt="followers" className="mr-1" />
          <p className="text-[#909090]">{followers}</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestFriendCard;
