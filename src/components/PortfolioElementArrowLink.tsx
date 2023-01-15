import { getAnchorIdByTitle } from "@/functions";
import Image from "next/image";
import React from "react";

interface PortfolioElementArrowLinkProps {
  direction: "up" | "down";
  elementTitle: string;
}

export default function PortfolioElementArrowLink({
  direction,
  elementTitle,
}: PortfolioElementArrowLinkProps) {
  return (
    <a
      className={
        "group absolute z-10 left-0 w-full h-12 flex flex-row justify-center items-center gap-5 cursor-pointer transition-opacity opacity-50 hover:opacity-100 " +
        (direction === "up" ? "top-0" : "bottom-0")
      }
      href={"#" + getAnchorIdByTitle(elementTitle)}
    >
      <span className="opacity-0 transition-opacity group-hover:opacity-100">
        {elementTitle.toLowerCase()}
      </span>
      <Image
        src={
          direction === "up" ? "scroll-up-arrow.png" : "scroll-down-arrow.png"
        }
        alt={direction === "up" ? "Up" : "Down"}
        width={40}
        height={40}
      ></Image>
      <span className="opacity-0 transition-opacity group-hover:opacity-100">
        {elementTitle.toLowerCase()}
      </span>
    </a>
  );
}
