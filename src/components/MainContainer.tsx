import type React from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="h-auto min-h-dvh w-full bg-gradient-to-r from-slate-900 to-sky-950 px-4 pt-32">
      {children}
    </div>
  );
};
