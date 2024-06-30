import SuggestFriendCard from "../Suggestions/SuggestFriendCard";
import { suggestions } from "../Suggestions/Suggestions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const FeedCarousel = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {suggestions.map((suggestion, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <SuggestFriendCard
                key={index}
                user_image={suggestion.user_image}
                user_name={suggestion.user_name}
                user_username={suggestion.user_username}
                description={suggestion.description}
                followers={suggestion.followers}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeedCarousel;
