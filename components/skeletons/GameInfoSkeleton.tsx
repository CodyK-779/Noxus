import {
  ArrowRight,
  Award,
  Bookmark,
  Building2,
  Calendar,
  Clock,
  ExternalLink,
  Globe,
  Users,
} from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";

const GameInfoSkeleton = () => {
  return (
    <aside className="cm:pl-[18px] mb-8">
      <Skeleton className="relative hidden cm:block aspect-video overflow-hidden rounded-xl" />

      {/* Info Card */}
      <div className="space-y-3 cm:mt-7 mt-0">
        {/* Stat Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Quick Stats
          </h3>

          <div className="space-y-3.5">
            <InfoRow
              icon={<Award className="cm:size-4 min-[375px]:size-5 size-4" />}
              label="Metacritic"
            >
              <Skeleton className="w-10 h-[21px]" />
            </InfoRow>

            <InfoRow
              icon={<Clock className="cm:size-4 min-[375px]:size-5 size-4" />}
              label="Avg. Playtime"
            >
              <Skeleton className="w-20 xl:h-3 cm:h-2.5 h-3" />
            </InfoRow>

            <InfoRow
              icon={
                <Calendar className="cm:size-4 min-[375px]:size-5 size-4" />
              }
              label="Released"
            >
              <Skeleton className="w-20 xl:h-3.5 cm:h-3 h-3.5" />
            </InfoRow>
          </div>
        </div>

        {/* Genre Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Genres
          </h3>
          <div className="flex gap-1.5">
            <Skeleton className="w-full h-[25px]" />
          </div>
        </div>

        {/* Team Card */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Team
          </h3>

          <div className="space-y-3.5">
            <div className="team-container">
              <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
                <Users className="cm:size-4 min-[375px]:size-5 size-4 text-purple-500" />
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
                  Developer
                </p>
              </div>

              <Skeleton className="w-20 xl:h-3.5 cm:h-3 h-3.5" />
            </div>

            <div className="team-container">
              <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
                <Building2 className="cm:size-4 min-[375px]:size-5 size-4 text-blue-500" />
                <p className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
                  Publisher
                </p>
              </div>

              <Skeleton className="w-20 xl:h-3.5 cm:h-3 h-3.5" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 py-4 px-3">
          <h3 className="cm:text-xs min-[375px]:text-sm text-xs font-semibold uppercase tracking-wider mb-3">
            Platforms
          </h3>

          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="xl:w-9 cm:w-8 min-[375px]:w-9 w-8 xl:h-11 cm:h-10 min-[375px]:h-11 h-10"
              />
            ))}
          </div>
        </div>

        {/* Website Card */}
        <div className="flex items-center justify-between py-4 px-3 bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-lg border border-neutral-800 hover:border-[#e91e3f]/50 transition-all group">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-neutral-800 rounded-lg">
              <Globe className="xl:size-[18px] cm:size-4 size-[18px] text-neutral-400 group-hover:text-[#e91e3f]" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs font-medium text-neutral-500">
                Official Website
              </p>
              <Skeleton className="w-24 xl:h-2.5 cm:h-2 h-2.5" />
            </div>
          </div>
          <ExternalLink className="size-4 xl:block md:hidden block text-neutral-400 group-hover:text-[#e91e3f] transition-colors" />
        </div>
      </div>

      {/* Stores */}
      <div className="space-y-3 mt-6">
        <p className="font-semibold text-white flex items-center gap-2">
          <span className="w-1 h-4 bg-[#e91e3f] rounded-full" />
          Available on
        </p>

        <div className="grid xl:grid-cols-2 md:grid-cols-1 min-[375px]:grid-cols-2 grid-cols-1 gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="group flex items-center gap-2.5 p-2.5 rounded-lg border bg-neutral-900/60 border-neutral-800  hover:bg-neutral-900 hover:border-[#e91e3f] transition-all duration-300 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5"
            >
              <Skeleton className="min-[406px]:size-10 min-[375px]:size-9 size-10 rounded-md" />
              <div className="flex flex-col gap-1">
                <Skeleton className="w-20 lg:h-2.5 cm:h-2 min-[406px]:h-2.5 h-2" />
                <div className="flex items-center gap-1 text-neutral-400 group-hover:text-[#e91e3f]">
                  <p className="text-xs">Visit store</p>
                  <ArrowRight className="size-3 mt-0.5 group-hover:translate-x-1 transition-transform duration-200 ease-in" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist Btn */}
      <Button
        size="lg"
        className="flex items-center gap-2 w-full mt-6 font-semibold bg-gradient-to-r from-[#e91e3f] to-[#c01030] hover:from-[#c01030] hover:to-[#a00d26] text-white border-0 shadow-lg shadow-[#e91e3f]/25 transition-all hover:scale-[1.02]"
      >
        <Bookmark className="size-4" />
        Add to Wishlist
      </Button>
    </aside>
  );
};

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center xl:gap-2 cm:gap-1.5 gap-2 text-neutral-400">
      <span className="text-[#e91e3f]">{icon}</span>
      <span className="xl:text-sm cm:text-xs min-[375px]:text-sm text-xs font-medium">
        {label}
      </span>
    </div>
    <div className="flex items-center">{children}</div>
  </div>
);

export default GameInfoSkeleton;
