import Image from "next/image";
import React from "react";

const Subtitle = ({
  children,
  icon = false,
}: {
  children: React.ReactNode;
  icon?: boolean;
}) => {
  return (
    <div
      className={`flex items-center ${
        icon ? "justify-between" : "justify-center"
      }`}
    >
      <h2 className="text-h3 md:text-d-h3 text-neutral-900">{children}</h2>
      {icon && (
        <Image
          src="/service-heading.png"
          height="100"
          width="100"
          alt="service-heading"
        />
      )}
    </div>
  );
};

export default Subtitle;
