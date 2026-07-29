import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
};

export default function Polaroid({ src, alt }: PolaroidProps) {
  return (
    <div className="relative mx-auto w-fit -rotate-3 rounded-sm bg-white p-3 pb-10 shadow-md">
      <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-2 bg-mustard/70" />
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="h-64 w-64 object-cover"
      />
    </div>
  );
}
