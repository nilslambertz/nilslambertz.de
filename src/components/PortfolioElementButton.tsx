import {PortfolioElementLink} from "@/portfolio-elements";
import Image from "next/image";
import React from "react";

interface PortfolioElementButtonProps {
  link: PortfolioElementLink;
  buttonBackgroundColor?: string;
}

export default function PortfolioElementButton({
                                                 link,
                                                 buttonBackgroundColor,
                                               }: PortfolioElementButtonProps) {
  const bgColor = buttonBackgroundColor ? buttonBackgroundColor : "";

  return (
    <a
      className={
        "relative group px-5 py-2 border border-white text-2xl flex flex-row items-center gap-2 cursor-pointer select-none " +
        bgColor
      }
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className="absolute top-0 left-0 h-full w-full transition-colors bg-white bg-opacity-0 group-hover:bg-opacity-10"></div>
      {link.icon && (
        <>
          {link.icon === "github" && (
            <Image
              src="githubLogo.png"
              alt="Github"
              width={35}
              height={35}
            ></Image>
          )}
          {link.icon === "mail" && (
            <Image src="email.svg" alt="E-Mail" width={35} height={35}></Image>
          )}
        </>
      )}
      <span>{link.text}</span>
    </a>
  );
}
