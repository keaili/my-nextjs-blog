import Container from "@/app/_components/container";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-bento-line mt-16">
      <Container>
        <div className="py-14 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-center mb-8 text-bento-cream">
            了解 keaili
          </h3>
          <div className="flex justify-center items-center space-x-6">
            <a
              href="https://www.douyin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Douyin"
              className="p-3 rounded-2xl bg-bento-card border border-bento-line transition-colors duration-300 hover:bg-bento-taupe"
            >
              <Image
                src="/icons/douyin.svg"
                alt="Douyin"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://weibo.com/u/2789699882"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Weibo"
              className="p-3 rounded-2xl bg-bento-card border border-bento-line transition-colors duration-300 hover:bg-bento-taupe"
            >
              <Image
                src="/icons/weibo.svg"
                alt="Weibo"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://www.xiaohongshu.com/user/profile/63533d12000000001901de5a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Xiaohongshu"
              className="p-3 rounded-2xl bg-bento-card border border-bento-line transition-colors duration-300 hover:bg-bento-taupe"
            >
              <Image
                src="/icons/xhs.svg"
                alt="Xiaohongshu"
                width={28}
                height={28}
              />
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-bento-sand">
            © 2026 keaili
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
