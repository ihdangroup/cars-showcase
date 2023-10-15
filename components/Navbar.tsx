import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full ">
      <nav className="px-10 py-6 lg:px-24 flex justify-between items-center">
        <h2 className="text-lg font-bold italic">
          Search <span className="text-blue-600">Cars</span>
        </h2>
        <CustomButton
          title="Sign In"
          customStyle="bg-black text-white py-2 px-4 text-sm rounded"
        />
      </nav>
    </header>
  );
};

export default Navbar;
