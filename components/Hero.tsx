import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex justify-between flex-wrap py-12">
      <div className="w-full lg:w-1/2">
        <h1 className="text-[40px] font-bold">
          Lorem, ipsum dolor sit amets consectetur adipisicing elit.
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
          ducimus quaerat ipsa.
        </p>
        <CustomButton
          title="Start Now"
          customStyle="bg-[#eaeaea]  px-4 py-2 rounded text-sm"
        />
      </div>
      <div className="my-4 w-full lg:w-1/2 flex items-center justify-center">
        <Image src="/car.png" width="400" height="300" alt="next_image" />
      </div>
    </div>
  );
};
export default Hero;
