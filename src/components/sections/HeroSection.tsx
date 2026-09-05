import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import PrimaryButton from "@/components/small/PrimaryButton";
import QuoteForm from "@/components/small/QuoteForm";
import SecondaryButton from "@/components/small/SecondaryButton";

export const NO_DEMO_VIDEO = "There is no demo video in this prototype";

const HeroSection = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-col justify-center gap-10 md:gap-16 py-16 px-[30px] md:px-[150px]"
    >
      <div className="flex gap-10 flex-col md:flex-row md:gap-20 md:items-center">
        <div className="flex flex-col gap-6 md:w-full animate-slideIn">
          <div>
            <h1
              id="hero-heading"
              className="text-d2 text-center md:text-start font-semibold leading-tight md:leading-relaxed"
            >
              Quick & Reliable{" "}
              <span className="text-d1 text-secondary font-bold leading-3">
                Warehousing and Logistics
              </span>{" "}
              Solution.
            </h1>
            <p className="text-base text-center md:text-start text-neutral-700">
              ShipUp delivers an unparalleled customer service through dedicated customer
              teams, engaged people working in an agile culture, and a global footprint
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <PrimaryButton href="#quote">Join Now</PrimaryButton>
            <SecondaryButton disabled title={NO_DEMO_VIDEO}>
              <span className="rounded-full p-2">
                <VideoCameraIcon className="size-6 text-primary" />
              </span>
              Play Demo
            </SecondaryButton>
          </div>
        </div>

        <Image
          className="md:w-full"
          src="/heroImg.jpg"
          height="366"
          width="366"
          priority
          alt="Illustration: a courier on a scooter checks a tablet while a drone carries a parcel over a city map"
        />
      </div>

      <QuoteForm />
    </section>
  );
};

export default HeroSection;
