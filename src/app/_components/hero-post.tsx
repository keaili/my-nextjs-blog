import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
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
  author,
  slug,
}: Props) {
  return (
    <section className="mb-16 transform">
      <div className="mb-8 md:mb-16 relative">
        <div className="border-3 border-neo-black bg-neo-yellow shadow-neo-md relative">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="p-5 border-3 border-neo-black bg-neo-pink shadow-neo-md transform hover:-rotate-1 transition-transform duration-200">
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight font-bold text-neo-black">
            <Link 
              href={`/posts/${slug}`} 
              className="hover:underline hover:underline-offset-4 hover:decoration-4"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg font-bold bg-neo-blue inline-block px-3 py-1 border-2 border-neo-black transform rotate-1">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="p-5 border-3 border-neo-black bg-neo-white shadow-neo-md transform hover:rotate-1 transition-transform duration-200 mt-5 md:mt-0">
          <p className="text-lg leading-relaxed mb-4 text-neo-black">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
