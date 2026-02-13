import React from "react";

interface NavLinkProps {
  title: string;
  link: string;
}

export default function NavLink({title, link}: NavLinkProps) {
  return <a className="hover:underline" href={"#" + link}>{title}</a>;
}
