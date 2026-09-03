import { type Author } from "@/interfaces/author";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  wide?: boolean;
};

export function PostPreview({
  title,
  coverImage,
  date,
  slug,
  wide = false,
}: Props) {
  return (
    <Link
      href={`/posts/${slug}`}
      aria-label={title}
      className={`group relative block h-64 md:h-auto overflow-hidden rounded-3xl border border-bento-line ${
        wide ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
      }`}
    >
      <Image
        src={coverImage}
        alt={`Cover Image for ${title}`}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <p className="text-[11px] uppercase tracking-[0.25em] text-bento-sand mb-1">
          <DateFormatter dateString={date} />
        </p>
        <h3 className="text-xl font-bold leading-snug text-bento-cream">
          {title}
        </h3>
      </div>
    </Link>
  );
}
