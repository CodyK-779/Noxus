"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";

const AuthBackBtn = () => {
  const router = useRouter();

  return (
    <Button
      className="absolute top-4"
      variant="ghost"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon />
      <p className="font-medium">Go Back</p>
    </Button>
  );
};

export default AuthBackBtn;
