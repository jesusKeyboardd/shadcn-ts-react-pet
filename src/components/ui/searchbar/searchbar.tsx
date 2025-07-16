import { useInput } from "@/hooks/useInput";
import { Search } from "lucide-react";

export default function SearchBar({
  placeholder,
  className,
}: {
  placeholder: string;

  className?: string;
}) {
  const [value, onChange] = useInput();

  const variants = {
    default:
      "bg-neutral-900 placeholder:opacity-50 font-medium placeholder:font-normal",
  };

  const sizes = {
    default: "px-5 py-[18px] rounded-2xl text-sm leading-0 ",
  };

  const searchSizes = {
    default: "right-0 p-5",
  };

  return (
    <div className={"flex flex-1 w-full relative" + " " + className}>
      <input
        className={
          "flex-1 w-full" +
          " " +
          variants["default"] +
          " " +
          sizes["default"] +
          " "
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className={
          "absolute top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer" +
          " " +
          searchSizes.default
        }
      >
        <Search size={20} />
      </button>
    </div>
  );
}
