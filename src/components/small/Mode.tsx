import Image from "next/image";

const Mode = ({
  index,
  title,
  desc,
  imgSrc,
  imgAlt,
  reversed = false,
}: {
  index: number;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
  reversed?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col md:items-center md:justify-between md:px-[60px] ${
        reversed ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex flex-col gap-4 md:w-[40%]">
        <div className="flex gap-3 text-h4 md:text-d-h4 items-center">
          <div
            aria-hidden="true"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-neutral-100"
          >
            <span className="text-lg">{index}</span>
          </div>
          <h3 className="text-secondary">
            <span className="sr-only">Step {index}: </span>
            {title}
          </h3>
        </div>
        <p className="text-sm md:text-d-sm text-neutral-800">{desc}</p>
      </div>

      <div className="flex justify-center">
        <div className="relative w-60 h-52 md:w-[460px] md:h-[380px]">
          {/* `fill` replaces the removed `layout="fill"` prop; the alt was the file path. */}
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            sizes="(min-width: 768px) 460px, 240px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Mode;
