import type React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <h1 className="font-display text-center text-5xl text-blue-200 sm:text-6xl lg:text-7xl xl:text-9xl">
      {children}
    </h1>
  );
}
