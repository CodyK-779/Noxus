import { Dispatch, SetStateAction } from "react";

export interface PaginateType {
  start: number;
  end: number;
}

export interface Pagination {
  paginate: PaginateType;
  setPaginate: Dispatch<SetStateAction<PaginateType>>;
}
