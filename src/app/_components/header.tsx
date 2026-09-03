import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-16 mt-8">
      <Link
        href="/"
        className="text-bento-cream transition-colors duration-300 hover:text-bento-clay"
      >
        Blog<span className="text-bento-clay">.</span>
      </Link>
    </h2>
  );
};

export default Header;
