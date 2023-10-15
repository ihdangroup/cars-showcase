"use client";
import { calculateCarRent } from "@/constants";
import { CarProps } from "@/types";
import { generateImageUrl } from "@/utils";
import Image from "next/image";
import * as React from "react";
import CardDetail from "./CardDetail";
import CustomButton from "./CustomButton";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="shadow-lg w-full lg:w-[24%] p-6 rounded">
      <div>
        <h2 className="font-bold text-xl">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-bold">
        <span className="self-start text-[14px] font-semibold">$</span>
        <span>{carRent}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={`${generateImageUrl(car)}`}
          alt="car_model"
          fill
          priority
          className="relative object-contain"
        />
      </div>
      <div className="flex justify-between text-sm">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/steering-wheel.png"
            width={20}
            height={20}
            alt="steering_wheel"
          />
          <p>{transmission === "a" ? "Automatic" : "Manual"}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/tire.png" width={20} height={20} alt="tire" />
          <p>{drive.toUpperCase()}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src="/gas.png" width={20} height={20} alt="gas" />
          <p>{city_mpg} MPG</p>
        </div>
      </div>
      <CustomButton
        title="Show More"
        customStyle="w-full bg-blue-600 rounded text-white py-2 mt-4"
        handleClick={() => setIsOpen(true)}
      />
      <CardDetail car={car} isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default CarCard;
