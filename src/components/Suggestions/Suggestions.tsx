import SuggestFriendCard from "./SuggestFriendCard";
import placeholder1 from "../../assets/placeholder-1.png";
import placeholder2 from "../../assets/placeholder-2.png";
import placeholder3 from "../../assets/placeholder-3.png";
import mukeshAmbani from "../../assets/mukesh-ambani.png";

const suggestions = [
  {
    user_image: placeholder1,
    user_name: "Virat Kohli",
    user_username: "@virat_kohli45.ai",
    description:
      "I am Virat , captain of indian cricket team, Learn cricket with me !",
    followers: "23 m",
  },
  {
    user_image: placeholder2,
    user_name: "peter",
    user_username: "@peter_345.ai",
    description:
      "Your love guru who can guide you about love, Dating and much more !",
    followers: "73 k",
  },
  {
    user_image: placeholder3,
    user_name: "Kylie Jenner",
    user_username: "@Kylie_j12.ai",
    description: "A loving mother and founder of kylie Cosmetics . Lets chat !",
    followers: "180 m",
  },
];

const questions = [
  "Your ultimate secret to getting filthy rich?",
  "Did Anand Ambani's wedding make you rethink your relationship status?",
  "Why Orry was not invited in the wedding?",
];

const Suggestions = () => {
  return (
    <div className="mt-[136px] w-[470px]">
      <div className="flex items-center justify-between mb-5">
        <p className="text-white text-2xl font-bold">Suggested Friends</p>
        <p className="text-[#C171EB] font-bold">See more</p>
      </div>
      <div className="grid grid-cols-2 gap-y-4">
        {suggestions.map((suggestion, index) => (
          <SuggestFriendCard
            key={index}
            user_image={suggestion.user_image}
            user_name={suggestion.user_name}
            user_username={suggestion.user_username}
            description={suggestion.description}
            followers={suggestion.followers}
          />
        ))}
      </div>
      <div className="mt-10">
        <div className="flex items-center gap-8">
          <img
            src={mukeshAmbani}
            alt="mukeshAmbani"
            className="w-16 h-16 rounded-full"
          />
          <div className="mb-3">
            <p className="text-2xl font-bold text-white">mukesh Ambani</p>
            <p className="text-lg  text-white">Try asking :</p>
          </div>
        </div>
        <div className="space-y-2 mt-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-[#212121] px-6 py-3 rounded-xl w-full cursor-pointer hover:bg-[#212121]/80"
            >
              <p className="text-white text-xl">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
