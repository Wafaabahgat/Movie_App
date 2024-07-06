import { FC } from "react";
import { useParams } from "react-router-dom";
import { setCredits, setDetails, setSimilarData } from "../slice/movie/movie";
import useFetchDetails from "../hooks/usefetchDetails";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import moment from "moment";
import Divider from "../components/Divider";
import HorizontalScrollCard from "../components/HorizontalScollCard";
import useFetchData from "../hooks/usefetchData";

interface DetailsPagesProps {}

const DetailsPages: FC<DetailsPagesProps> = () => {
  const params = useParams();
  console.log(params, "params");

  const imageURL = useSelector((state: RootState) => state.MovieSlice.imageURL);

  const { loading, data } = useFetchDetails({
    url: `${params.explore}/${params.id}`,
    action: setDetails,
    states: "details",
  });

  const { data: castData } = useFetchDetails({
    url: `/${params?.explore}/${params?.id}/credits`,
    action: setCredits,
    states: "credits",
  });

  const SimilarData = useFetchData({
    url: `/${params?.explore}/${params?.id}/similar`,
    action: setSimilarData,
    states: "similar",
  });

  // const { data: recommData } = useFetchDetails({
  //   url: `/${params?.explore}/${params?.id}/recommendations`,
  //   action: setRecommData,
  //   states: "recommData",
  // });

  // tv/{series_id}/similar
  console.log(data, "dat");
  console.log(castData, "castData");
  console.log(SimilarData, "similarData");
  // console.log(recommData, "recommData");

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");

  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    ?.join(", ");

  console.log(writer, "writer");

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="w-full h-[300px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container flex flex-col gap-5 px-3 py-16 mx-auto lg:py-0 lg:flex-row lg:gap-10 ">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="object-cover rounded h-80 w-60"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white lg:text-4xl">
            {data?.title || data?.name}
          </h1>
          <p className="mt-2 text-sm text-neutral-400">{data?.tagline}</p>
          <Divider />
          <div className="flex items-center gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Duration : {duration[0]}h {duration[1]}m
            </p>
          </div>
          <Divider />
          <div>
            <h3 className="mt-3 mb-1.5 text-2xl font-bold text-white">
              Overview
            </h3>
            <p>{data?.overview}</p>
            <Divider />

            <div className="flex items-center gap-5 my-5 text-center">
              <p>Staus : {data?.status}</p>
              <span>|</span>
              <p>
                Release Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Revenue : {Number(data?.revenue)}</p>
            </div>
            <Divider />

            <div>
              <p>
                <span className="text-white">Director</span> :{" "}
                {castData.crew && castData.crew[0]?.name}
              </p>

              <Divider />

              <p>
                <span className="text-white">Writer : {writer}</span>
              </p>
            </div>

            <Divider />

            <h2 className="text-lg font-bold">Cast :</h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5 my-4">
              {castData?.cast
                ?.filter((el) => el?.profile_path)
                .map((starCast: any) => {
                  return (
                    <div>
                      <div>
                        <img
                          src={imageURL + starCast?.profile_path}
                          className="object-cover w-24 h-24 rounded-full"
                        />
                      </div>
                      <p className="text-sm font-bold text-center text-neutral-400">
                        {starCast?.name}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        {SimilarData && (
          <HorizontalScrollCard
            data={SimilarData}
            heading={"Similar " + params?.explore}
            media_type={params?.explore}
          />
        )}
        {/* {SimilarData ? (
          <HorizontalScrollCard
            data={SimilarData}
            heading={"Similar " + params?.explore}
            media_type={params?.explore}
          />
        ) : (
          "No HorizontalScrollCard"
        )} */}

        {/* <HorizontalScrollCard
          data={recommData}
          heading={"Recommendation " + params?.explore}
          media_type={params?.explore}
        /> */}
      </div>
    </div>
  );
};

export default DetailsPages;
