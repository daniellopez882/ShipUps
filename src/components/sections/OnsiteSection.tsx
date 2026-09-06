import Image from "next/image";
import PrimaryButton from "@/components/small/PrimaryButton";
import SecondaryButton from "@/components/small/SecondaryButton";
import Subtitle from "@/components/small/Subtitle";

const OnsiteSection = () => {
  return (
    <section
      id="warehouse"
      aria-labelledby="warehouse-heading"
      className="flex flex-col gap-16 px-[30px] py-16 bg-primary-light"
    >
      <Subtitle id="warehouse-heading">
        <span className="font-bold">Warehouse</span> Onsite
      </Subtitle>

      <div className="flex justify-center">
        <div className="relative w-80 h-52 md:w-[800px] md:h-[420px]">
          <Image
            src="/onsite.png"
            alt="Stylised map of warehouse locations, shown as clusters of dots"
            fill
            sizes="(min-width: 768px) 800px, 320px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center gap-5">
        <PrimaryButton href="#quote">Join Now</PrimaryButton>
        <SecondaryButton href="#quote">Request Quote</SecondaryButton>
      </div>
    </section>
  );
};

export default OnsiteSection;
