import { getUser } from "@/actions/user-action";
import FreeGamesImages from "./FreeGamesImages";
import FreeGamesSwiper from "./FreeGamesSwiper";
import MBFreeGamesSwiper from "./MBFreeGamesSwiper";

const FreeGamesMidSection = async () => {
  const user = await getUser();

  const wishlistItems = user?.wishlist?.items;

  const valorant =
    "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.";

  const wuwa =
    "Wuthering Waves is a story-rich open-world action RPG with a high degree of freedom. You wake from your slumber as Rover, joined by a vibrant cast of Resonators on a journey to reclaim your lost memories and surmount the Lament.";

  return (
    <section className="md:mt-20 min-[425px]:mt-16 min-[350px]:mt-14 mt-12">
      <FreeGamesImages
        image="/free_games/valorant.jpg"
        title="Valorant"
        desc={valorant}
        slug="valorant"
        game="valorant"
        wishlistItems={wishlistItems}
      />
      <FreeGamesSwiper />
      <MBFreeGamesSwiper />
      <FreeGamesImages
        image="/free_games/wuwa.webp"
        title="Wuthering Waves"
        desc={wuwa}
        slug="wuthering-waves"
        game="wuwa"
        wishlistItems={wishlistItems}
      />
    </section>
  );
};

export default FreeGamesMidSection;
