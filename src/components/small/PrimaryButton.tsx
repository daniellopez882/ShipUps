import React from "react";
import { Button } from "@/components/ui/button";

/** A call to action that goes somewhere; the old one was a button with no handler. */
const PrimaryButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Button asChild size="lg" className="px-4 py-2 h-12 w-full md:w-60">
      <a href={href}>{children}</a>
    </Button>
  );
};

export default PrimaryButton;
