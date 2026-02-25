"use client";

import { useMenu } from "./MenuProvider";

const Overlay = () => {
  const { openMenu, setOpenMenu } = useMenu();

  return (
    <>
      {openMenu && (
        <div
          className="fixed min-[850px]:hidden min-h-screen inset-0 z-20 bg-black/50"
          onClick={() => setOpenMenu(false)}
        />
      )}
    </>
  );
};

export default Overlay;
