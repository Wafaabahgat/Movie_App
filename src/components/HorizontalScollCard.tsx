import { FC, useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface HorizontalScrollCardProps {
  ttl: string;
  media_type: string;
  movieData: Array<any>;
  tranding?: boolean;
}


const HorizontalScrollCard: FC<HorizontalScrollCardProps> = ({
  ttl,
  movieData = [],
  tranding,
  media_type,
}) => {
  const movieRef = useRef<HTMLDivElement>(null);
  
  

  const handlePreviousmovie = () => {
    if (movieRef.current) {
      movieRef.current.scrollLeft -= 300;
    }
  };

  const handleNextmovie = () => {
    if (movieRef.current) {
      movieRef.current.scrollLeft += 300;
    }
  };


  return (
    <div className="container px-4 mx-auto my-10 ">
      <h1 className="mb-2 text-xl font-bold text-white lg:text-3xl">{ttl}</h1>

      <div className="relative">
        <div
          ref={movieRef}
          className="relative z-10 grid grid-flow-col gap-6 overflow-hidden overflow-x-scroll transition-all grid-cols-plog scroll-smooth scrolbar-none"
        >
          {movieData.map((data, index) => (
            <Card
              data={data}
              index={index + 1}
              tranding={tranding}
              media_type={media_type}
            />
          ))}
        </div>

        {/* <div className="absolute top-0 items-center justify-between hidden w-full h-full lg:flex"> */}
        <div className="absolute top-0 flex items-center justify-between w-full h-full">
          <button
            onClick={handlePreviousmovie}
            className="z-10 p-1 -ml-2 text-black bg-white rounded-full"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={handleNextmovie}
            className="z-10 p-1 -mr-2 text-black bg-white rounded-full"
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
