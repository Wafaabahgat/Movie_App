import { FC } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

interface CardProps {}

const Card: FC<CardProps> = ({ data, index, tranding }) => {
  const imageURL = useSelector((state) => state.MovieSlice.imageURL);

  return (
    <div className="w-full max-w-[220px] min-w-[200px] rounded overflow-hidden relative">
      <img src={imageURL + data.poster_path} alt={data.title} />
      <div className="absolute top-2 ">
        {tranding && (
          <div className="px-4 py-1 overflow-hidden rounded-r-full bg-black/50 backdrop-blur-3xl">
            # {index} Tranding
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full p-1 bg-black/20 backdrop-blur-3xl h-14">
        <h2 className="font-semibold text-md drop-shadow-2xl text-ellipsis ">
          {data?.title || data?.name}
        </h2>
        <div className="flex items-center justify-between text-sm text-neutral-400">
          <p>{moment(data?.release_date).format("MMM Do Y")}</p>
          <p className="px-3 rounded-full bg-gradient-to-l from-red-700 to-orange-500 py-0.5">
            {Number(data?.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;