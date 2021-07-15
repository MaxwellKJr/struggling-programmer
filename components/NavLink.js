import React from "react";
import Link from "next/link";

const NavLink = ({ link }) => {
  const { name, title, slug } = link;
  return (
    <li>
      <Link href={`/${slug}`}>
        <a
          title={`${title}`}
          activeClassName="bg-red-300"
          className="uppercase text-sm py-4 mx-0 hover:text-primary-dark"
        >
          {name}
        </a>
      </Link>
    </li>
  );
};

export default NavLink;
