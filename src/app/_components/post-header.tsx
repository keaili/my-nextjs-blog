import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12 border-3 border-neo-black bg-neo-pink shadow-neo-sm p-4 inline-block transform -rotate-1">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 border-3 border-neo-black bg-neo-yellow shadow-neo-md overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6 border-3 border-neo-black bg-neo-pink shadow-neo-sm p-4 inline-block transform -rotate-1">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg font-bold bg-neo-blue inline-block px-3 py-1 border-2 border-neo-black transform rotate-1">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
