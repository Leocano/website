import type React from "react";

type ExternalLinkProps = {
  children: React.ReactNode;
  to: string;
};

export const ExternalLink = ({ children, to }: ExternalLinkProps) => {
  return (
    <a
      className="text-amber-500 underline hover:text-amber-400 hover:no-underline"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
