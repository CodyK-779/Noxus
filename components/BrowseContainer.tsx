import { BrowseSearch } from "@/app/(root)/browse/page";
import BrowseBanner from "@/components/BrowseBanner";
import BrowseBody from "./BrowseBody";
import { getUser } from "@/actions/user-action";
import BrowseFeatured from "./BrowseFeatured";

interface Props {
  searchParams: Promise<BrowseSearch>;
}

const BrowseContainer = async ({ searchParams }: Props) => {
  const search = (await searchParams).search || "";
  const user = await getUser();

  const wishlistItems = user?.wishlist?.items;

  return (
    <>
      <BrowseBanner />
      <BrowseFeatured />
    </>
  );
};

export default BrowseContainer;
