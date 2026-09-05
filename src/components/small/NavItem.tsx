import React from "react";

const NavItem = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <a href={href} onClick={onClick} className="flex items-center gap-1 hover:underline">
      {children}
    </a>
  );
};

export default NavItem;
