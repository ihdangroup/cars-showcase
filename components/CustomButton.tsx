"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  customStyle,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button className={customStyle} onClick={handleClick}>
      <span>{title}</span>
    </button>
  );
};
export default CustomButton;
