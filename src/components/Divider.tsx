import { FC } from "react";

interface DividerProps {}

const Divider: FC<DividerProps> = () => {
  return <div className="bg-neutral-700 p-[0.5px] rounded-full my-4"></div>;
};

export default Divider;
