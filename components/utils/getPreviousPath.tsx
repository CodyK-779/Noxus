"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function getPreviousPath() {
  const pathname = usePathname();
  const prevRef = useRef<string | null>(null);

  useEffect(() => {
    prevRef.current = pathname;
  }, [pathname]);

  return prevRef.current;
}
