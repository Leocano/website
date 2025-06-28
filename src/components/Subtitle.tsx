import type React from "react";

type SubtitleProps = {
  children: React.ReactNode;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <h2 className="font-text mt-28 text-center text-xl font-normal text-blue-200">
      {children}
    </h2>
  );
};
