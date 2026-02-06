import React from "react";
import Service from "@/components/small/Service";
import PrimaryButton from "@/components/small/PrimaryButton";
import { Button } from "@/components/ui/button";
import Subtitle from "@/components/small/Subtitle";

const ServicesSection = () => {
  return (
    <div className="flex flex-col gap-16 bg-[#F4F6F9] px-[30px] md:px-[150px] py-16">
      <Subtitle icon>
        <span className="font-bold">Services</span> we offer
      </Subtitle>

      {/* Services */}
      <div className="flex flex-col md:flex-row gap-16">
        <Service
          title="warehousing services"
          desc="A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more."
          icon="/track.png"
        />

        <Service
          title="Global Freight"
          desc="Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight."
          icon="/flight.png"
        />

        <Service
          title="Packaging Solutions"
          desc="Our packaging solutions are optimized for each individual customer and are selected based on on the customer’s specific needs and requirements."
          icon="/bag.png"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-5 md:justify-center">
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

export default ServicesSection;
