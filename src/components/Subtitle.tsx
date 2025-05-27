import type React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};

export function Subtitle({ children }: SubtitleProps) {
  return (
    <h2 className="font-inter mt-28 text-center text-xl font-normal text-indigo-200">
      {children}
    </h2>
  );
}
