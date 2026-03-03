import BrowseFeatured from "../BrowseFeatured";
import BrowseBannerSkeleton from "./BrowseBannerSkeleton";
import BrowseBodySkeleton from "./BrowseBodySkeleton";
import BrowseFilterSkeleton from "./BrowseFilterSkeleton";

const BrowseSkeleton = () => {
  return (
    <>
      <BrowseBannerSkeleton />
      <BrowseFeatured />
      <BrowseBodySkeleton />
      <BrowseFilterSkeleton />
    </>
  );
};

export default BrowseSkeleton;
