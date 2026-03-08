import { getBOTY2025 } from "@/actions/games-action";
import { UserType } from "./utils/interfaceTypes";
import Best2025Container from "./Best2025Container";

interface Props {
  userPromise: Promise<UserType | null | undefined>;
}

const Best2025Wrapper = async ({ userPromise }: Props) => {
  const [games, user] = await Promise.all([getBOTY2025(), userPromise]);
  const wishlistItems = user?.wishlist?.items;

  return <Best2025Container games={games} wishlistItems={wishlistItems} />;
};

export default Best2025Wrapper;
