import { useSession } from "@/app/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import DropdownSignout from "./DropdownSignout";

const ProfileDropdown = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative min-[400px]:size-[38px] size-[35px] rounded-full overflow-hidden cursor-pointer flex items-center justify-center bg-[#e91e3f] text-white">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name}
              fill
              sizes="(min-width: 400px) 76px, 70px"
              className="object-cover"
            />
          ) : (
            <p className="font-medium">
              {session.user.name.charAt(0).toUpperCase()}
            </p>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-72 py-2.5 rounded-xl mr-4 lg:mr-0">
        <DropdownMenuItem className="px-4 flex items-center gap-3 hover:bg-white">
          <div className="relative size-11 rounded-full overflow-hidden cursor-pointer flex items-center justify-center bg-black text-white">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            ) : (
              <p className="font-medium text-lg">
                {session.user.name.charAt(0).toUpperCase()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold">{session.user.name}</p>
            <p className="text-sm font-medium text-neutral-300">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="border border-neutral-800" />
        <DropdownMenuGroup className="pt-2">
          <Link href="/wishlist">
            <DropdownMenuItem className="flex items-center gap-3 px-4 py-2.5 cursor-pointer">
              <Bookmark className="size-8" />
              <p className="font-semibold text-neutral-100">Wishlist</p>
            </DropdownMenuItem>
          </Link>
          <DropdownSignout />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
