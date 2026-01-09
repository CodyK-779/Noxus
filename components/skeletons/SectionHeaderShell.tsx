import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Props {
  header: string;
}

const SectionHeaderShell = ({ header }: Props) => {
  return (
    <section className="max-container flex items-center justify-between mt-[70px] mb-6">
      <div className="w-fit flex items-center gap-1.5 group cursor-pointer hover:underline underline-offset-2">
        <h1 className="sm:text-2xl min-[400px]:text-[21px] min-[350px]:text-[18px] text-base font-bold">
          {header}
        </h1>

        <ChevronRight className="min-[400px]:mt-[7px] min-[350px]:mt-[3.5px] mt-[4px] min-[400px]:size-7 min-[350px]:size-6 size-5 group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      <div className="hidden min-[768px]:flex items-center gap-3.5">
        <button className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full">
          <ChevronLeft className="size-4" />
        </button>
        <button className="flex items-center justify-center p-2 bg-neutral-700 disabled:opacity-50 rounded-full">
          <ChevronRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default SectionHeaderShell;
