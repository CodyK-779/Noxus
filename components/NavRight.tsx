import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import NavSearch from "./NavSearch";
import { Dispatch, SetStateAction, Suspense } from "react";
import NavSearchShell from "./skeletons/NavSearchShell";
import { Menu } from "lucide-react";
import { Session } from "./utils/interfaceTypes";
import { Skeleton } from "./ui/skeleton";

interface Props {
  session: Session | null;
  isPending: Boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const NavRight = ({ session, isPending, setOpenMenu }: Props) => {
  return (
    <div className="flex items-center min-[350px]:gap-4 gap-3.5">
      <Suspense fallback={<NavSearchShell />}>
        <NavSearch />
      </Suspense>
      {isPending ? (
        <Skeleton className="min-[400px]:size-[38px] size-[35px] rounded-full" />
      ) : session ? (
        <ProfileDropdown session={session} />
      ) : (
        <Link href="/signIn">
          <button className="min-[400px]:text-sm text-xs sm:px-5 px-4 font-bold nox-btn">
            Sign In
          </button>
        </Link>
      )}
      <div
        className="min-[850px]:hidden cursor-pointer"
        onClick={() => setOpenMenu(true)}
      >
        <Menu className="min-[400px]:size-8 size-7" />
      </div>
    </div>
  );
};

export default NavRight;
