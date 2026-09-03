import Container from "@/app/_components/container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-neo-green border-t-3 border-neo-black mt-8">
      <Container>
        <div className="py-16 flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tighter leading-tight text-center mb-8 bg-neo-pink border-3 border-neo-black shadow-neo-sm px-4 py-2 transform -rotate-1">
            了解 keaili
          </h3>
          <div className="flex justify-center items-center space-x-8">
            <a
              href="https://www.douyin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neo-white border-2 border-neo-black shadow-neo-sm transform hover:rotate-3 hover:scale-110 transition-transform"
            >
              <Image 
                src="/icons/douyin.svg" 
                alt="Douyin" 
                width={32} 
                height={32} 
              />
            </a>
            <a
              href="https://weibo.com/u/2789699882"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neo-yellow border-2 border-neo-black shadow-neo-sm transform hover:-rotate-3 hover:scale-110 transition-transform"
            >
              <Image 
                src="/icons/weibo.svg" 
                alt="Weibo" 
                width={32} 
                height={32} 
              />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/63533d12000000001901de5a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-neo-blue border-2 border-neo-black shadow-neo-sm transform hover:rotate-3 hover:scale-110 transition-transform"
            >
              <Image 
                src="/icons/xhs.svg" 
                alt="Xiaohongshu" 
                width={32} 
                height={32} 
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
