import React from "react";
import Head from "next/head";
import TopPosts from "../components/TopPosts";
const Stories = () => {
  return (
    <div>
      <Head>
        <title>Stories | 😢 The Struggling Programmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Top Stories</h1>
        <TopPosts />
      </main>
    </div>
  );
};

export default Stories;
