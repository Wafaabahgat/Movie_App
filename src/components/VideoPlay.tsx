import { FC } from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/usefetchDetails";

interface VideoPlayProps {
  media_type: string;
  movieData: Array<any>;
  close: () => void;
  data: any;
}

const VideoPlay: FC<VideoPlayProps> = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  return (
    <section className="fixed inset-0 z-40 flex items-center justify-center bg-opacity-50 bg-neutral-700">
      <div className="bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative">
        <button
          onClick={close}
          className="absolute z-50 text-3xl -right-1 -top-6"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
