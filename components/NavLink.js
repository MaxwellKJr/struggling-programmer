import React from "react";
import Link from "next/link";

const NavLink = ({ link }) => {
  const { name, title, slug } = link;
  return (
    <li>
      <Link href={`/${slug}`}>
        <a
          title={`${title}`}
          className="uppercase text-xs py-4 mx-0 hover:text-primary-yellow"
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
