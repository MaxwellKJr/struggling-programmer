import React from "react";
import Link from "next/link";
import Image from "next/image";
import blogImage from "../public/time-for-change.jpg";

const BlogPostCard = () => {
  return (
    <article className="blogpost bg-gray-100 relative transition-all ease-in-out transform hover:-rotate-2 hover:scale-110">
      <Link href="/">
        <a>
          <Image src={blogImage} className="w-full h-full" placeholder="blur" />
        </a>
      </Link>
      <div className="blogdetails p-8 pt-0">
        <h3 className="text-2xl my-4">This is a blog post</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          porro quo ea sunt, id tempora vero mollitia quam repellendus, quod
          distinctio!
        </p>
        {/* <ul className="tags flex flex-row bg-primary-dark p-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul> */}
        <Link href="/">
          <a className="bg-primary-dark text-primary-yellow text-sm absolute -bottom-4 px-6 py-2">
            Read More
          </a>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
