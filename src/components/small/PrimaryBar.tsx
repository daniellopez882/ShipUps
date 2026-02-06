import Logo from "./Logo";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavItem from "@/components/small/NavItem";
import { Button } from "@/components/ui/button";

const PrimaryBar = () => {
  return (
    <div className="flex justify-between w-full p-[24px] md:px-[150px]">
      <Logo />

      {/* Burger Menu (Mobile📱) */}
      <div className="flex md:hidden">
        <Bars3Icon className="size-6" />
      </div>

      {/* Nav Items(Desktop💻 ) */}
      <div className="hidden md:flex gap-8">
        <NavItem arrow>Company</NavItem>
        <NavItem arrow>Services</NavItem>
        <NavItem>Solutions</NavItem>
        <NavItem>Industries</NavItem>
        <NavItem>Insights</NavItem>
        <NavItem>News and Media</NavItem>
      </div>

      {/* Buttons(Desktop💻 ) */}
      <div className="hidden md:flex flex-col md:flex-row gap-5 md:justify-center">
        <Button className="px-4 py-2 h-12 w-40">Join Now</Button>
        <Button variant="outline" className="text-primary px-4 py-2 h-12 w-40">
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default PrimaryBar;
