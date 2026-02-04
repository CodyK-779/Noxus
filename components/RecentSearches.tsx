import { ArrowUpLeft, History, X } from "lucide-react";
import { getRecentSearches } from "./utils/resendSearches";
import { useMenu } from "./MenuProvider";
import { useEffect } from "react";
import ClearAllRecents from "./dialogs/ClearAllRecents";

const RecentSearches = () => {
  const { recents, setRecents, setSearch, mbInputRef } = useMenu();

  useEffect(() => {
    setRecents(getRecentSearches());
  }, []);

  console.log(recents);

  const reselectRecent = (recent: string) => {
    if (mbInputRef.current) {
      mbInputRef.current.value = recent;
      setSearch(recent);
    }
  };

  return (
    <div className="max-container mt-4">
      {recents.length > 0 ? (
        <>
          <div className="flex items-center justify-between gap-2">
            <p className="min-[375px]:text-base text-sm font-medium">
              Recent Searches
            </p>
            <ClearAllRecents setRecents={setRecents} />
          </div>

          <div className="flex flex-col mt-5">
            {recents.map((r, i) => (
              <div key={i}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <History className="min-[350px]:size-5 size-[18px] shrink-0" />
                    <p className="min-[350px]:text-sm text-xs font-medium truncate">
                      {r}
                    </p>
                  </div>
                  <div className="flex items-center min-[350px]:gap-3 gap-2.5">
                    <button onClick={() => reselectRecent(r)}>
                      <ArrowUpLeft className="min-[350px]:size-6 size-[21px] shrink-0" />
                    </button>
                    {/* <button className="flex items-center justify-center font-orbitron min-[350px]:text-sm text-[13px] min-[350px]:size-6 size-5 rounded-full bg-neutral-800">
                    x
                  </button> */}
                  </div>
                </div>
                {i < recents.length - 1 && <hr className="mt-2.5 mb-[18px]" />}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="font-medium">No Recent Searches</p>
      )}
    </div>
  );
};

export default RecentSearches;
