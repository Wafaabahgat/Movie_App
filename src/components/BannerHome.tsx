import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

interface BannerHomeProps {}

const BannerHome: FC<BannerHomeProps> = () => {
  const bannerData = useSelector((state) => state.MovieSlice.bannerData);
  const imageURL = useSelector((state) => state.MovieSlice.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  console.log(currentImage);

  const handleprevious = () => {
    if (currentImage > 0) {
      setCurrentImage((e) => e - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((e) => e + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [imageURL, bannerData, currentImage]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((e, i) => {
          return (
            <div
              key={e.id}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + e.backdrop_path}
                  className="object-cover w-full h-full"
                />
              </div>

              {/*** next and previous image ***/}
              <div className="absolute top-0 items-center justify-between hidden w-full h-full px-4 group-hover:lg:flex">
                <button
                  className="z-10 p-1 text-xl text-black bg-white rounded-full hover:bg-gradient-to-l from-red-700 to-orange-500"
                  onClick={handleprevious}
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="z-10 p-1 text-xl text-black bg-white rounded-full hover:bg-gradient-to-l from-red-700 to-orange-500"
                  onClick={handleNext}
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-800 to-transparent"></div>

              <div className="container mx-auto">
                <div className="absolute bottom-0 w-full max-w-md px-3 ">
                  <h2 className="text-2xl font-bold text-white lg:text-4xl drop-shadow-2xl ">
                    {e?.title || e?.name}
                  </h2>
                  <p className="my-2 text-ellipsis line-clamp-3">
                    {e.overview}
                  </p>

                  <div className="flex items-center gap-4">
                    <p> Rating : {Number(e.vote_average).toFixed(1)}</p>
                    <span>|</span>
                    <p> View : {Number(e.popularity).toFixed(0)}</p>
                  </div>

                  <button className="px-4 py-2 mt-4 text-black transition-all bg-white rounded shadow-md hover:bg-gradient-to-l from-red-700 to-orange-500 hover:scale-105">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
