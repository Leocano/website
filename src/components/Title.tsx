import type React from "react";

type TitleProps = {
  children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
  return (
    <h1 className="font-display text-center text-9xl text-white">{children}</h1>
  );
}
