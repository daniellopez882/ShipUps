import Image from "next/image";
import React from "react";

const Service = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => {
  return (
    <div>
      {/* Decorative: the heading carries the meaning. The alt used to be the file path. */}
      <Image src={icon} alt="" height="100" width="100" />
      <h3 className="text-h3 text-primary">{title}</h3>
      <p className="text-base text-neutral-600">{desc}</p>
    </div>
  );
};

export default Service;
