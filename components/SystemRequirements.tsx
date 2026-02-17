import { GamePlatforms } from "@/actions/games-action";
import { parseRequirements } from "./utils/utils";
import EmptyRequirements from "./EmptyRequirements";
import { Info } from "lucide-react";
import RequirementCard from "./RequirementCard";

interface Props {
  platforms: GamePlatforms[];
}

const SystemRequirements = ({ platforms }: Props) => {
  const pc = platforms.find((p) => p.platform.slug === "pc");

  if (!pc?.requirements.minimum && !pc?.requirements.recommended)
    return <EmptyRequirements />;

  const minimum = parseRequirements(pc.requirements.minimum);
  const recommended = parseRequirements(pc.requirements.recommended);

  const oneMissing = minimum.length < 1 || recommended.length < 1;

  return (
    <section className="mt-10">
      <div
        className={`grid ${oneMissing ? "grid-cols-1" : "lg:grid-cols-2 grid-cols-1"} gap-6`}
      >
        <RequirementCard data={minimum} type="M" />
        <RequirementCard data={recommended} type="R" />
      </div>

      {/* Additional Info Card */}
      <div className="mt-6 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
        <div className="flex min-[375px]:flex-row flex-col min-[375px]:items-start items-center min-[375px]:gap-3 gap-2">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Info className="size-4 text-blue-500" />
          </div>
          <div className="flex-1 min-[375px]:block hidden">
            <p className="text-sm text-neutral-400">
              <span className="font-medium text-white">Important Note:</span>{" "}
              Requires a 64-bit processor and operating system. These
              requirements are guidelines and actual performance may vary based
              on system configuration and settings.
            </p>
          </div>
          <div className="min-[375px]:hidden flex flex-col">
            <p className="font-medium text-white text-sm text-center">
              Important Note
            </p>
            <p className="min-[350px]:text-sm text-[13px] text-neutral-400 mt-2 text-center">
              Requires a 64-bit processor and operating system. These
              requirements are guidelines and actual performance may vary based
              on system configuration and settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
