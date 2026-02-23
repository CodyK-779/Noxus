import { Gamepad2 } from "lucide-react";

const EmptyWishlist = () => {
  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Gamepad2 className="size-20 text-neutral-600" />
        <h1 className="text-5xl font-bold text-center max-w-[70%] mt-6">
          You haven't added anything to your wishlist yet
        </h1>
      </div>
    </div>
  );
};

export default EmptyWishlist;
