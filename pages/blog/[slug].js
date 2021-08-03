import React from "react";
import { createClient } from "contentful";
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
  };
};

const BlogPost = ({ blog }) => {
  console.log(blog);
  const { title, slug, thumbnail, author, tags, postedOn } = blog.fields;
  return (
    <section className="py-8">
      <div className="container mx-auto w-1/2">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
          blurDataURL
          className="w-full h-full"
          placeholder="blur"
        />
        <div>
          <h2 className="text-4xl">{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
