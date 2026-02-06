"use client";

import { ArrowUpLeft, History } from "lucide-react";
import { getRecentSearches } from "./utils/resendSearches";
import { useMenu } from "./MenuProvider";
import { useEffect, useRef, useState } from "react";
import ClearAllRecents from "./dialogs/ClearAllRecents";
import { useRouter, useSearchParams } from "next/navigation";
import DeleteRecent from "./dialogs/DeleteRecent";

const RecentSearches = () => {
  const { recents, setRecents, setSearch, setOpenSearch, mbInputRef } =
    useMenu();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setRecents(getRecentSearches());
  }, []);

  const reselectRecent = (recent: string) => {
    if (mbInputRef.current) {
      mbInputRef.current.value = recent;
      mbInputRef.current.focus();
      setSearch(recent);
    }
  };

  const searchSuggestion = (recent: string) => {
    if (openDialog) return;

    const params = new URLSearchParams(searchParams.toString());

    setOpenSearch(false);
    params.set("search", encodeURIComponent(recent));
    router.push(`/browse?${params.toString()}`, { scroll: false });
  };

  const handleTouchStart = (recent: string) => {
    timerRef.current = setTimeout(() => {
      if (navigator.vibrate) navigator.vibrate(10);
      setSelectedSearch(recent);
      setOpenDialog(true);
    }, 500);
  };

  const handleTouchEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <>
      <div className="mt-4">
        {recents.length > 0 ? (
          <>
            <div className="max-container flex items-center justify-between gap-2">
              <p className="min-[375px]:text-base text-sm font-bold">
                Recent Searches
              </p>
              <ClearAllRecents setRecents={setRecents} />
            </div>

            <div className="flex flex-col mt-1">
              {recents.map((r, i) => (
                <div
                  key={i}
                  onTouchStart={() => handleTouchStart(r)}
                  onTouchEnd={handleTouchEnd}
                  onTouchMove={handleTouchEnd}
                  className="hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <div className="max-container">
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className="flex items-center gap-3 flex-1 min-w-0 pt-[18px] pb-3"
                        onClick={() => searchSuggestion(r)}
                      >
                        <History className="min-[350px]:size-5 size-[18px] shrink-0" />
                        <p className="min-[350px]:text-sm text-xs font-medium truncate">
                          {r}
                        </p>
                      </div>
                      <div className="flex items-center min-[350px]:gap-3 gap-2.5">
                        <button onClick={() => reselectRecent(r)}>
                          <ArrowUpLeft className="min-[350px]:size-6 size-[21px] shrink-0" />
                        </button>
                      </div>
                    </div>
                    {i < recents.length - 1 && <hr />}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="max-container font-bold">No Recent Searches</p>
        )}
      </div>
      <DeleteRecent
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        selectedSearch={selectedSearch}
        setSelectedSearch={setSelectedSearch}
      />
    </>
  );
};

export default RecentSearches;
