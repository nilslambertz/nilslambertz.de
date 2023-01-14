import { PortfolioElementLink } from "@/portfolio-elements";
import Image from "next/image";
import React from "react";

interface PortfolioElementButtonProps {
  link: PortfolioElementLink;
}

export default function PortfolioElementButton({
  link,
}: PortfolioElementButtonProps) {
  return (
    <a
      className="px-5 py-2 border border-white text-2xl flex flex-row items-center gap-2 cursor-pointer"
      href={link.url}
      target="_blank"
    >
      {link.icon && (
        <>
          {link.icon === "github" && (
            <Image
              src="/githubLogo.png"
              alt="Github"
              width={35}
              height={35}
            ></Image>
          )}
          {link.icon === "mail" && (
            <Image src="/email.svg" alt="E-Mail" width={35} height={35}></Image>
          )}
        </>
      )}
      <span>{link.text}</span>
    </a>
  );
}
