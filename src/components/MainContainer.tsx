import type React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="h-dvh w-full bg-indigo-950 px-10 pt-32">{children}</div>
  );
}
