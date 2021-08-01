import React from "react";
import Link from "next/link";
import blogImage from "../public/time-for-change.jpg";
import Image from "next/image";

const BlogPosts = () => {
  return (
    <div className="py-8">
      <div className="container w-full mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {/* loop goes here */}
          <article className="blogpost bg-gray-100 relative transition-all ease-in-out transform hover:-rotate-2 hover:scale-110">
            <Link href="/">
              <a>
                <Image
                  src={blogImage}
                  className="w-full h-full"
                  placeholder="blur"
                />
              </a>
            </Link>
            <div className="blogdetails p-8 pt-0">
              <h3 className="text-2xl my-4">This is a blog post</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, porro quo ea sunt, id tempora vero mollitia quam
                repellendus, quod distinctio!
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
          <article className="blogpost bg-gray-100 relative">
            <Link href="/">
              <a>
                <Image
                  src={blogImage}
                  className="w-full h-full"
                  placeholder="blur"
                />
              </a>
            </Link>
            <div className="blogdetails p-8">
              <h3 className="text-2xl my-4">This is a blog post</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, porro quo ea sunt, id tempora vero mollitia quam
                repellendus, quod distinctio!
              </p>
              {/* <ul className="tags flex flex-row bg-primary-dark p-2 absolute">
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
          <article className="blogpost bg-gray-100 relative">
            <Link href="/">
              <a>
                <Image
                  src={blogImage}
                  className="w-full h-full"
                  placeholder="blur"
                />
              </a>
            </Link>
            <div className="blogdetails p-8">
              <h3 className="text-2xl my-4">This is a blog post</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolore, porro quo ea sunt, id tempora vero mollitia quam
                repellendus, quod distinctio!
              </p>
              {/* <ul className="tags flex flex-row bg-primary-dark p-2 absolute">
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
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
