import React from "react";
import Service from "@/components/small/Service";
import PrimaryButton from "@/components/small/PrimaryButton";
import SecondaryButton from "@/components/small/SecondaryButton";
import Subtitle from "@/components/small/Subtitle";

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="flex flex-col gap-16 bg-[#F4F6F9] px-[30px] md:px-[150px] py-16"
    >
      <Subtitle id="services-heading" icon>
        <span className="font-bold">Services</span> we offer
      </Subtitle>

      <div className="flex flex-col md:flex-row gap-16">
        <Service
          title="Warehousing services"
          desc="A pay-as-you-go solution for pallet storage, inventory management, fulfilment (pick and pack), inbound and outbound handling, and more."
          icon="/track.png"
        />
        <Service
          title="Global freight"
          desc="Search and compare shipping rates among dozens of logistics partners for last-mile delivery and freight."
          icon="/flight.png"
        />
        <Service
          title="Packaging solutions"
          desc="Packaging optimised for each customer and selected for their specific needs and requirements."
          icon="/bag.png"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:justify-center">
        <PrimaryButton href="#quote">Join Now</PrimaryButton>
        <SecondaryButton href="#quote">Request Quote</SecondaryButton>
      </div>
    </section>
  );
};

export default ServicesSection;
