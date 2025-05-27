import type React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="h-dvh w-full bg-gradient-to-bl from-indigo-900 to-violet-800 px-4 pt-32">
      {children}
    </div>
  );
}
