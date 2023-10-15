"use client";
import { updateSearchParams } from "@/constants";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center mt-10 gap-5">
      {!isNext && (
        <button
          type="button"
          onClick={handleNavigation}
          className="bg-blue-600 p-3 text-white rounded"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default ShowMore;
