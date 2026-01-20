"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  path?: string;
}

const BackButton = ({ path }: Props) => {
  const router = useRouter();

  return (
    <button
      className="nox-hollow flex items-center font-semibold gap-1.5 px-4 min-[375px]:text-sm text-xs tracking-wide"
      onClick={() => {
        if (path) return router.push(path);
        return router.back();
      }}
    >
      <ArrowLeft className="size-4" />
      Go Back
    </button>
  );
};

export default BackButton;
