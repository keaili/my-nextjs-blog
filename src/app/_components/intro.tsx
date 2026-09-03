import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 bg-neo-yellow border-3 border-neo-black shadow-neo-md px-4 py-2 transform rotate-1">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 bg-neo-blue border-2 border-neo-black p-3 shadow-neo-sm transform -rotate-1">
        千里之行，始于足下
      </h4>
    </section>
  );
}
