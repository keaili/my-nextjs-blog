import Link from "next/link";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
};

export function QuotePanel({ title, excerpt, slug }: Props) {
  return (
    <div className="md:col-span-2 md:row-span-1 rounded-3xl border border-bento-line bg-bento-taupe p-6 md:p-8 flex flex-col justify-between">
      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-bento-cream/70 mb-3">
          最新文章
        </p>
        <h3 className="text-xl md:text-2xl font-bold leading-snug text-bento-cream">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-bento-cream/80 line-clamp-2">
          {excerpt}
        </p>
      </div>
      <Link
        href={`/posts/${slug}`}
        className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-bento-cream/40 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-bento-cream transition-colors duration-300 hover:bg-bento-cream hover:text-bento-bg"
      >
        阅读全文 →
      </Link>
    </div>
  );
}
