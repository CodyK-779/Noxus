"use client";

import { useEffect, useState } from "react";
import SafeHTMLRenderer from "./SafeHTMLRenderer";

interface Props {
  description: string;
}

const TextExtender = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [truncate, setTruncate] = useState(false);

  useEffect(() => {
    setTruncate(description.length > 300);
  }, [description]);

  return (
    <div className="">
      <SafeHTMLRenderer
        html={description}
        className={`sm:text-base text-sm font-medium ${
          truncate && !expanded ? "line-clamp-4" : ""
        }`}
      />

      {truncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm whitespace-nowrap h-fit font-semibold bg-[#e91e3f] rounded px-1 hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default TextExtender;
