import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPostCard = ({ post }) => {
  const { title, slug, thumbnail, excerpt, author, tags, postedOn } =
    post.fields;
  return (
    <article className="blogpost bg-gray-100 relative transition-all ease-in-out transform hover:-rotate-2 hover:scale-110">
      <Link href={`/blog/${slug}`}>
        <a>
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            blurDataURL
            className="w-full h-full"
            placeholder="blur"
          />
        </a>
      </Link>
      <div className="blogdetails p-4 pb-8 pt-0">
        <small>{postedOn}</small>
        <h3 className="text-2xl my-4">{title}</h3>
        <p className="text-sm">{excerpt}</p>
        <hr className="w-full h-0.5 bg-primary-dark my-2" />
        <ul className="tags flex flex-row flex-wrap pt-2 w-full">
          {tags.map((tag) => {
            return (
              <li
                key={tag}
                className="text-xs bg-gray-300 rounded-2xl px-2 mr-2 mb-2"
              >
                {tag}
              </li>
            );
          })}
        </ul>
        <Link href={`/blog/${slug}`}>
          <a className="bg-primary-dark text-primary-yellow text-sm absolute -bottom-4 px-6 py-2">
            Read More
          </a>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
