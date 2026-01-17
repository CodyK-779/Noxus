"use client";

interface SafeHTMLRendererProps {
  html: string;
  className?: string;
}

export default function SafeHTMLRenderer({
  html,
  className = "",
}: SafeHTMLRendererProps) {
  return (
    <div
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
