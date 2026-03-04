import { TagType } from "@/actions/tags-action";
import Image from "next/image";

interface Props {
  border?: boolean;
  padding: string;
  tags: TagType[];
}

const TagList = ({ border, padding, tags }: Props) => {
  return (
    <div
      className={`flex flex-col ${
        border ? "border-r border-neutral-700" : ""
      } ${padding}`}
    >
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="flex items-center gap-4 p-2 rounded-md cover hover:bg-neutral-800 transition-colors duration-200 cursor-pointer"
        >
          <div className="relative lg:size-14 size-12 rounded overflow-hidden">
            <Image
              src={tag.image_background}
              alt={tag.name}
              fill
              sizes="(min-width: 1024px) 112px, 96px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="lg:text-base text-sm font-semibold">{tag.name}</p>
            <p className="font-medium lg:text-sm text-[13px]">
              Game Count: {tag.games_count.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagList;
