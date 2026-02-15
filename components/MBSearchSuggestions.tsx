"use client";

import { useEffect, useState } from "react";
import { useMenu } from "./MenuProvider";
import useDebounce from "./utils/useDebounce";
import { GamesType, searchSuggestions } from "@/actions/games-action";
import Image from "next/image";
import { platformIconByKey, platformIcons } from "./utils/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { addRecentSearch, getRecentSearches } from "./utils/recentSearches";
import NoResults from "./NoResults";

const MBSearchSuggestions = () => {
  const { search, setSearch, setOpenSearch, setRecents, mbInputRef } =
    useMenu();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GamesType[]>([]);
  const debouncedValue = useDebounce(search, 300);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!debouncedValue) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchSuggestions(debouncedValue, 6);
        setResults(data.results);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [debouncedValue]);

  const handleNavigate = () => {
    setOpenSearch(false);
    setSearch("");
    if (mbInputRef.current) mbInputRef.current.value = "";
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    const query = mbInputRef.current?.value || "";

    params.set("search", query);
    setOpenSearch(false);
    router.push(`/browse?${params.toString()}`);
    addRecentSearch(query);
    setRecents(getRecentSearches());
    setSearch("");
    if (mbInputRef.current) mbInputRef.current.value = "";
  };

  return (
    <div className="mt-4">
      {!loading ? (
        <>
          {results.length > 0 ? (
            <>
              <h1 className="max-container font-bold min-[350px]:text-base text-sm">
                TOP RESULTS
              </h1>
              <div className="flex flex-col min-[350px]:mt-4 mt-3">
                {results.map((r) => (
                  <Link
                    href={`/browse/games/${r.slug}`}
                    onClick={handleNavigate}
                    key={r.id}
                    className="hover:bg-neutral-900 transition-colors cursor-pointer py-2.5"
                  >
                    <div className="max-container flex items-center gap-3 overflow-hidden">
                      <div className="relative min-[350px]:size-[52px] size-[50px] rounded-lg overflow-hidden shrink-0">
                        {r.background_image ? (
                          <Image
                            src={r.background_image}
                            alt={r.name}
                            fill
                            sizes="(min-width: 350px) 104px, 100px"
                            className="object-cover"
                          />
                        ) : (
                          <Image
                            src="/image-placeholder.webp"
                            alt={r.name}
                            fill
                            sizes="(min-width: 350px) 112px, 100px"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{r.name}</p>
                        {r.platforms && (
                          <div className="flex items-center gap-1 mt-0.5">
                            {platformIcons(r.platforms).map((r) => (
                              <div
                                key={r}
                                className="min-[350px]:text-[14px] text-[13px]"
                              >
                                {platformIconByKey(r)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div
                className="max-container flex items-center w-fit gap-2 mt-7 cursor-pointer group hover:underline underline-offset-2"
                onClick={handleSearch}
              >
                <p className="min-[350px]:text-base text-sm font-semibold">
                  View All Results
                </p>
                <ArrowRight className="min-[350px]:size-[19px] size-4 min-[350px]:mt-1 mt-0.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </>
          ) : (
            <NoResults query={search} />
          )}
        </>
      ) : (
        <>
          <h1 className="max-container font-bold min-[350px]:text-base text-sm">
            TOP RESULTS
          </h1>

          <div className="flex flex-col min-[350px]:mt-4 mt-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="hover:bg-neutral-900 transition-colors cursor-pointer py-2.5"
              >
                <div className="max-container flex items-center gap-3 overflow-hidden">
                  <Skeleton className="min-[350px]:size-[52px] size-[50px] rounded-lg" />
                  <div className="flex flex-col flex-1 min-w-0">
                    <Skeleton className="h-3 w-32" />
                    <Skeleton className="h-3 w-28 mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MBSearchSuggestions;
