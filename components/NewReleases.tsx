import { ChevronRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import NewPaginations from "./NewPaginations";
import Link from "next/link";

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
        <Link href="/discover/new-releases">
          <h1 className="sm:text-2xl min-[400px]:text-[21px] min-[350px]:text-[18px] text-base font-bold">
            Discover New Releases
          </h1>
        </Link>

        <ChevronRight className="min-[400px]:mt-[7px] min-[350px]:mt-[3.5px] mt-[4px] min-[400px]:size-7 min-[350px]:size-6 size-5 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
      <NewPaginations paginate={paginate} setPaginate={setPaginate} />
    </section>
  );
};

export default NewReleases;
