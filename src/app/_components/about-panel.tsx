import Link from "next/link";

export function AboutPanel() {
  return (
    <div className="md:col-span-1 md:row-span-1 rounded-3xl border border-bento-line bg-bento-rust p-6 flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-bento-cream/70 mb-3">
          关于
        </p>
        <h3 className="text-xl font-bold text-bento-cream">keaili</h3>
        <p className="mt-2 text-sm leading-relaxed text-bento-cream/80">
          记录学习、生活与四季。
        </p>
      </div>
      <Link
        href="https://github.com/keaili"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-bento-cream/40 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-bento-cream transition-colors duration-300 hover:bg-bento-cream hover:text-bento-bg"
      >
        GitHub →
      </Link>
    </div>
  );
}
