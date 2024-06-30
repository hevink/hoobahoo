import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import mrbeast from "../../assets/mrbeast.png";

const questions = [
  "Your ultimate secret to getting filthy rich?",
  "Did Anand Ambani's wedding make you rethink your relationship status?",
  "Why Orry was not invited in the wedding?",
];

const TilesCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="max-w-xl">
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <div className="mt-10">
            <div className="flex items-center gap-8">
              <img
                src={mrbeast}
                alt="mrbest"
                className="w-16 h-16 rounded-full"
              />
              <div className="mb-3">
                <p className="text-2xl font-bold text-white">Mr Beast</p>
                <p className="text-lg  text-white">Try asking :</p>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {questions.map((question, index) => (
                <div
                  key={index}
                  className="bg-[#212121] px-6 py-3 rounded-xl w-fit cursor-pointer hover:bg-[#212121]/80"
                >
                  <p className="text-white text-xl">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TilesCarousel;
