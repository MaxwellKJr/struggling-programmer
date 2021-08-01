import React from "react";
import BlogPosts from "./BlogPosts";

const TopPosts = () => {
  return (
    <section>
      <div className="container max-w-screen mx-auto w-full py-16 px-4 md:px-8">
        <h2 className="flex flex-col text-4xl text-primary-dark justify-center items-center font-bold">
          Top Stories
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
};

export default TopPosts;
