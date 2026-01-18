"use client";

import { useState } from "react";
import DateFilter from "./dropdowns/DateFilter";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PlatformFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [releaseDate, setReleaseDate] = useState({
    year: "",
    value: "",
  });

  const handleSearch = (date: string, value: string) => {
    const dateParams = new URLSearchParams(searchParams.toString());

    if (value !== releaseDate.value) {
      dateParams.set("date", value);
      setReleaseDate({ year: date, value: value });
    } else {
      dateParams.delete("date");
      setReleaseDate({ year: "", value: "" });
    }

    router.push(`?${dateParams.toString()}`);
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-10 mb-6">
        <DateFilter date={releaseDate} handleSearch={handleSearch} />
      </div>
      <hr className="h-0.5 bg-neutral-800" />
    </>
  );
};

export default PlatformFilters;
