import React from "react";
import { Button } from "@/components/ui/button";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button size="lg" className="px-4 py-2 h-12 w-full md:w-60">
      {children}
    </Button>
  );
};

export default PrimaryButton;
