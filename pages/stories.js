import React from "react";
import { createClient } from "contentful";
import Head from "next/head";
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

const Stories = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Stories | The Struggling Programmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopPosts posts={posts} />
      </main>
    </div>
  );
};

export default Stories;
