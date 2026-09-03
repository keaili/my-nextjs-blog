import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { QuotePanel } from "@/app/_components/quote-panel";
import { AboutPanel } from "@/app/_components/about-panel";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <section className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[230px] gap-4 mb-16">
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          <QuotePanel
            title={heroPost.title}
            excerpt={heroPost.excerpt}
            slug={heroPost.slug}
          />
          <AboutPanel />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </section>
      </Container>
    </main>
  );
}
