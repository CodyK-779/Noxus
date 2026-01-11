import Image from "next/image";

interface PlatformData {
  name: string;
  img: string;
}

interface Props {
  border?: boolean;
  padding: string;
  platforms: PlatformData[];
}

const MBPlatformList = ({ border, padding, platforms }: Props) => {
  return (
    <div
      className={`flex flex-col ${
        border ? "border-r border-neutral-700" : ""
      } ${padding}`}
    >
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="flex items-center min-[400px]:gap-4 gap-3 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-center min-[400px]:size-14 size-12 rounded overflow-hidden bg-white">
            <div className="relative min-[400px]:size-6 size-5 overflow-hidden">
              <Image
                src={platform.img}
                alt={platform.name}
                fill
                sizes="(min-width: 1024px) 56px, 48px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="min-[400px]:text-base text-sm font-semibold">
            {platform.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MBPlatformList;
