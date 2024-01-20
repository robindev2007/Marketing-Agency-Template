import { loadingSpeener } from "@/lib/constance";
import clsx from "clsx";
import Image from "next/image";
import { ButtonHTMLAttributes, Children, forwardRef } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";

type ButtonProps = {
  loading?: boolean;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "outline":
      return "px-8 ";
    case "ghost":
      return "w-fit h-fit px-0 py-0 hover:opacity-80";
    default:
      return "hover:bg-[#373737] rounded-full bg-black text-white px-8";
  }
};

const Button = ({
  className,
  variant,
  loading,
  children,
  ...props
}: ButtonProps) => {
  const merged = clsx(
    "h-8 transition duration-200 w-fit active:scale-95 text-center flex items-center",
    variant ? getVariant(variant) : getVariant("solid"),
    className,
  );

  return (
    <button disabled={loading} className={merged} {...props}>
      {!loading ? (
        children
      ) : (
        <Image height={100} width={200} alt="a" src={loadingSpeener} />
      )}
    </button>
  );
};

export default Button;
