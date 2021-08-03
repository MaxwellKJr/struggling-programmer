import React from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
};

const BlogPost = ({ blog }) => {
  const { title, thumbnail, body, author, postedOn } = blog.fields;

  return (
    <article className="py-8 pt-28">
      <div className="container px-8 mx-auto w-full md:w-4/5 lg:w-1/2 max-w-screen-lg">
        <h2 className="text-4xl mb-8">{title}</h2>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          blurDataURL
          className="w-full h-full"
          placeholder="blur"
        />
        <div>
          <h3 className="text-xl my-4">{`Author: ${author}`}</h3>
          <div className="text-xl">{documentToReactComponents(body)}</div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
