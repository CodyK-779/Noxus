import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import NewPaginations from "./NewPaginations";

export interface PaginateType {
  start: number;
  end: number;
}

export interface Pagination {
  paginate: PaginateType;
  setPaginate: Dispatch<SetStateAction<PaginateType>>;
}

const NewReleases = ({ paginate, setPaginate }: Pagination) => {
  return (
    <section className="max-container flex items-center justify-between mt-[70px] mb-6">
      <div className="w-fit flex items-center gap-1.5 group cursor-pointer hover:underline underline-offset-2">
        <h1 className="text-2xl font-semibold ">Discover New Releases</h1>
        <ChevronRight className="mt-[7px] size-7 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
      <NewPaginations paginate={paginate} setPaginate={setPaginate} />
    </section>
  );
};

export default NewReleases;
