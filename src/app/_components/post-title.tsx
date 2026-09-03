import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left relative">
      <span className="inline-block px-4 py-2 bg-neo-red border-3 border-neo-black shadow-neo-md transform hover:rotate-1 transition-transform duration-200">
        {children}
      </span>
    </h1>
  );
}
