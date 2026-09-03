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
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Link
      href={`/posts/${slug}`}
      aria-label={title}
      className="group relative block md:col-span-2 md:row-span-2 h-80 md:h-auto overflow-hidden rounded-3xl border border-bento-line"
    >
      <Image
        src={coverImage}
        alt={`Cover Image for ${title}`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="text-[11px] uppercase tracking-[0.25em] text-bento-sand mb-2">
          <DateFormatter dateString={date} />
        </p>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-bento-cream">
          {title}
        </h3>
        <p className="mt-2 hidden md:block text-sm leading-relaxed text-bento-sand max-w-md">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
