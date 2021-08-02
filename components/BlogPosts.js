import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = () => {
  return (
    <div className="py-8">
      <div className="container w-full mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {/* loop goes here */}
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
