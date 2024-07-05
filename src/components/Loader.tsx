import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className="grid w-full h-full place-items-center">
      <div className="flex flex-col items-center gap-2">
        <span className="rounded-full border-[5px] border-slate-300 border-t-slate-900 w-10 h-10 animate-spin"></span>
        <span className="font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
