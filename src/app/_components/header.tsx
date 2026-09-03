import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link 
        href="/" 
        className="bg-neo-red border-3 border-neo-black shadow-neo-sm px-4 py-2 hover:bg-neo-yellow transition-colors duration-300 transform rotate-1"
      >
        Blog
      </Link>
      <span className="ml-2 text-3xl">.</span>
    </h2>
  );
};

export default Header;
