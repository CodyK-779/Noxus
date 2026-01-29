"use client";

import SafeHTMLRenderer from "@/components/SafeHTMLRenderer";
import { useState, useMemo } from "react";

interface Props {
  description: string;
}

const TextExtender = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const isTruncatable = useMemo(
    () => description.replace(/<[^>]*>/g, "").length > 300,
    [description],
  );

  return (
    <div className="space-y-2">
      <SafeHTMLRenderer
        html={description}
        className={`sm:text-base min-[400px]:text-sm text-[13px] font-medium transition-all ${
          !expanded && isTruncatable ? `line-clamp-4` : ""
        }`}
      />

      {isTruncatable && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition underline-offset-4 hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default TextExtender;
