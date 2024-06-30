import { ChangeEventHandler, FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface InputProps {
  className?: string;
  type: string;
  placeholder: string;
  value: string;
  previcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  className,
  value,
  type,
  previcon,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <div className="flex items-center w-full px-3 border rounded-md border-border/50">
      {previcon ? previcon : ""}
      <input
        className={cn(
          "flex w-full outline-none bg-transparent px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
        {...props}
      />
    </div>
  );
};

export default Input;
