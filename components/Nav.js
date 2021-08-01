import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const links = [
  { id: 1, name: "Home", slug: "", title: "Home" },
  { id: 2, name: "Stories", slug: "stories", title: "Be encouraged" },
  { id: 3, name: "About", slug: "about", title: "Know why we started" },
  { id: 4, name: "Contact", slug: "contact", title: "Reach them" },
];

const Nav = () => {
  return (
    <nav className="w-full bg-primary-dark bg-opacity-90 text-white flex flex-col md:flex-row items-center fixed z-50">
      <div className="container max-w-screen-lg mx-auto w-full flex flex-row justify-between items-center px-8 md:px-4">
        <Link href="/">
          <a className="logo font-bold text-2xl text-primary-yellow py-4">SP</a>
        </Link>
        <ul className="main-nav grid grid-cols-4 gap-4 justify-center items-center">
          {links &&
            links.map((link) => {
              return <NavLink key={link.id} link={link} />;
            })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
