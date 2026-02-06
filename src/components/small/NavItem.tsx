import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const NavItem = ({
  arrow = false,
  children,
}: {
  arrow?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1">
      {children}
      {arrow && <ChevronDownIcon className="size-4" />}
    </div>
  );
};

export default NavItem;
