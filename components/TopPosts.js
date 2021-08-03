import React from "react";
import BlogPosts from "./BlogPosts";

const TopPosts = ({ posts }) => {
  return (
    <section className="py-16">
      <div className="container max-w-screen mx-auto w-full px-4 md:px-8">
        <h2 className="flex flex-col text-4xl text-primary-dark justify-center items-center font-bold py-8">
          Top Stories
        </h2>
        <BlogPosts posts={posts} />
      </div>
    </section>
  );
};

export default TopPosts;
