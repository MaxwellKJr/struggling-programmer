import Head from "next/head";
import { createClient } from "contentful";
import HeroSection from "../components/HeroSection";
import TopPosts from "../components/TopPosts";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1,
  };
}

const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div className="">
      <Head>
        <title>Home | The Struggling Programmer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <HeroSection />
        <TopPosts posts={posts} />
      </main>
    </div>
  );
};

export default Home;
