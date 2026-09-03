import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="border-3 border-neo-black bg-neo-white shadow-neo-md p-5 transform hover:rotate-1 transition-transform duration-200">
      <div className="mb-5 border-3 border-neo-black bg-neo-green overflow-hidden">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug font-bold">
        <Link 
          href={`/posts/${slug}`} 
          className="hover:underline hover:underline-offset-4 hover:decoration-2"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 font-bold bg-neo-blue inline-block px-3 py-1 border-2 border-neo-black transform -rotate-1">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-neo-black">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
