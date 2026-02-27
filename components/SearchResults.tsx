import { GamesType } from "@/actions/games-action";
import { ArrowRight, Gamepad2, SearchX } from "lucide-react";
import Image from "next/image";
import { platformIcons, platformIconByKey } from "./utils/utils";
import Link from "next/link";
import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";
import { Skeleton } from "./ui/skeleton";

interface Props {
  games: GamesType[];
  loading: boolean;
  handleSubmit: (e: FormEvent<Element>) => void;
  inputRef: RefObject<HTMLInputElement | null>;
  setSearch: Dispatch<SetStateAction<string>>;
}

const SearchResults = ({
  games,
  loading,
  handleSubmit,
  inputRef,
  setSearch,
}: Props) => {
  const handleSearch = () => {
    if (inputRef.current) inputRef.current.value = "";
    setSearch("");
  };

  return (
    <div className="absolute right-0 top-full mt-2 w-[445px] z-20">
      <div className="max-h-[70vh] overflow-y-auto rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl px-2 pt-4 pb-2">
        <h3 className="mb-2 text-sm font-bold text-neutral-300 px-2">
          TOP RESULTS
        </h3>
        {!loading ? (
          <>
            {games.length > 0 ? (
              <>
                {games.map((game) => (
                  <Link
                    href={`/browse/games/${game.slug}?from=search`}
                    onClick={handleSearch}
                    key={game.id}
                    className="flex items-center gap-3 mb p-2.5 rounded hover:bg-neutral-800 cursor-pointer transition"
                  >
                    <div className="relative h-12 w-9 rounded overflow-hidden">
                      {game.background_image ? (
                        <Image
                          src={game.background_image}
                          alt={game.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/image-placeholder.webp"
                          alt={game.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-neutral-100">
                        {game.name}
                      </p>
                      {game.platforms && (
                        <div className="flex items-center gap-1 mt-0.5">
                          {platformIcons(game.platforms).map((p) => (
                            <div key={p} className="text-[13px]">
                              {platformIconByKey(p)}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <div className="flex items-center justify-center mt-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-1.5">
                    <div className="flex items-center justify-center w-fit p-5 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800">
                      <Gamepad2 className="size-7 text-gray-600" />
                      <SearchX className="absolute top-5 right-[17px] size-3.5 text-red-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-full -z-10" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">No Games Found</h3>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mb p-2.5 rounded hover:bg-neutral-800 cursor-pointer transition"
              >
                <Skeleton className="h-12 w-9 rounded" />

                <div className="flex flex-col">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-3 w-28 mt-2" />
                </div>
              </div>
            ))}
          </>
        )}

        <hr className="mt-1.5" />

        <div
          className="flex items-center gap-1.5 w-fit px-2 py-3 font-medium text-sm group cursor-pointer"
          onClick={handleSubmit}
        >
          <h3 className="group-hover:underline underline-offset-1">
            View All Result{" "}
          </h3>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform ease-out duration-200" />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
