import Image from "next/image";
import PrimaryButton from "@/components/small/PrimaryButton";
import Subtitle from "@/components/small/Subtitle";
import { Button } from "@/components/ui/button";

const OnsiteSection = () => {
  return (
    <div className="flex flex-col gap-16 px-[30px] py-16 bg-primary-light">
      <Subtitle>
        <span className="font-bold">Warehouse</span> Onsite
      </Subtitle>

      {/* Map */}
      <div className="flex justify-center">
        <div className="relative w-80 h-52 md:w-[800px] md:h-[420px]">
          <Image src="/onsite.png" layout="fill" alt="map" />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row md:justify-center gap-5">
        <PrimaryButton>Join Now</PrimaryButton>
        <Button
          size="lg"
          variant="outline"
          className="text-primary px-4 py-2 h-12 w-full md:w-60"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default OnsiteSection;
