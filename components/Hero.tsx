import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex justify-between flex-wrap py-12">
      <div className="w-full lg:w-1/2">
        <h1 className="text-[40px] font-bold">
          Find,book, rent a car-- quick and{" "}
          <span className="text-blue-500">super easy!.</span>
        </h1>
        <p className="my-4">
          Streamline you car rental experience with our effortiess booking
          process.
        </p>
        <CustomButton
          title="Start Now"
          customStyle="bg-blue-600 text-white  px-4 py-2 rounded text-sm"
        />
      </div>
      <div className="w-full mt-12 lg:w-1/2 flex items-center justify-center">
        <Image src="/car.png" width="400" height="300" alt="next_image" />
      </div>
    </div>
  );
};
export default Hero;
