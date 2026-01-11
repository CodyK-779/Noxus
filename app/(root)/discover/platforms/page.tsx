import { getPlatforms } from "@/actions/platforms-action";
import PageHeaders from "@/components/PageHeaders";

export default async function PlatformsPage() {
  const platforms = await getPlatforms();

  return (
    <main className="max-container min-[400px]:mt-32 mt-24">
      <PageHeaders
        header="Game Platforms"
        desc="Discover the best games across every platform in Noxus. From PC masterpieces to console exclusives, find your perfect gaming experience."
      />
    </main>
  );
}
