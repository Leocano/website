import type React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return <div className="h-dvh w-full bg-indigo-950 pt-24">{children}</div>;
}
