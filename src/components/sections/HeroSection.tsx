import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import PrimaryButton from "@/components/small/PrimaryButton";
import SecondaryButton from "../small/SecondaryButton";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center gap-10 md:gap-16 py-16 px-[30px] md:px-[150px]">
      <div className="flex gap-10 flex-col md:flex-row md:gap-20 md:items-center">
        <div className="flex flex-col gap-6 md:w-full animate-slideIn">
          <div>
            {/* Titles */}
            <h1 className="text-d2 text-center md:text-start font-semibold leading-tight md:leading-relaxed">
              Quick & Reliable{" "}
              <span className="text-d1 text-secondary font-bold leading-3">
                Warehousing and Logistics
              </span>{" "}
              Solution.
            </h1>

            {/* Desc */}
            <p className="text-base text-center md:text-start text-neutral-700">
              ShipUp delivers an unparalleled customer service through dedicated
              customer teams, engaged people working in an agile culture, and a
              global footprint
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <PrimaryButton>Join Now</PrimaryButton>

            <SecondaryButton>
              <div className="rounded-full p-2">
                <VideoCameraIcon className="size-6 text-primary" />
              </div>
              Play Demo
            </SecondaryButton>
          </div>
        </div>

        {/* Image */}
        <Image
          className="md:w-full"
          src="/heroImg.jpg"
          height="366"
          width="366"
          alt="100"
        />
      </div>

      {/* Form */}
      <div className="rounded-xl py-8 px-4 shadow-custom flex flex-col md:flex-row gap-5">
        <Input placeholder="Origin" className="h-12" />
        <Input placeholder="Destination" className="h-12" />
        <Input placeholder="Weight" className="h-12" />
        <Button size="lg" className="bg-primary px-8 py-2 h-12">
          Check Price
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
