"use client";

import { FormEvent, useRef, useState } from "react";
import { toast } from "sonner";

const FooterEmail = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      return toast.error("Email is empty");
    }

    setSearch("");
    if (inputRef.current) inputRef.current.value = "";
    toast.success("Email sent!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 w-full rounded-full py-1 pl-5 flex items-center gap-2 bg-neutral-950 border border-neutral-800"
    >
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        placeholder="Email Address"
        className="w-full bg-transparent min-[375px]:text-sm text-[13px] focus:outline-none"
      />
      <button
        type="submit"
        className="min-[375px]:text-sm text-xs font-medium bg-nox text-white px-4 py-2 rounded-full mr-1"
      >
        Subscribe
      </button>
    </form>
  );
};

export default FooterEmail;
