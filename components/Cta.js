import React from "react";
import Link from "next/link";

const Cta = ({ callToAction }) => {
  const { name, slug, isPrimary } = callToAction;
  return (
    <Link href={`/${slug}`}>
      <a
        className={
          isPrimary
            ? "bg-white text-primary-dark border-2 border-white px-6 py-4 font-bold uppercase text-sm"
            : " text-white border-2 px-6 py-4 border-white font-bold uppercase text-sm"
        }
      >{`${name}`}</a>
    </Link>
  );
};

export default Cta;
