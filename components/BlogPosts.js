import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogPosts = ({ posts }) => {
  return (
    <div className="py-8">
      <div className="container w-full mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 md:gap-y-16">
          {/* loop goes here */}
          {posts &&
            posts.map((post) => {
              return <BlogPostCard key={post.sys.id} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
