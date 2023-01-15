import { getAnchorIdByTitle } from "@/functions";
import { PortfolioElementType } from "@/portfolio-elements";
import React from "react";
import PortfolioElementArrowLink from "./PortfolioElementArrowLink";
import PortfolioElementButton from "./PortfolioElementButton";

interface PortfolioElementProps {
  element: PortfolioElementType;
  previousElementTitle?: string;
  nextElementTitle?: string;
}

export default function PortfolioElement({
  element,
  previousElementTitle,
  nextElementTitle,
}: PortfolioElementProps) {
  const bgColor = element?.backgroundColor
    ? element.backgroundColor
    : "bg-black bg-opacity-80";
  const bgImage = element?.backgroundImage
    ? `url(${element.backgroundImage})`
    : undefined;

  return (
    <div
      className={
        "relative w-full h-full text-white flex flex-col items-center justify-center gap-10 " +
        bgColor +
        " " +
        (element?.extraClasses ? element?.extraClasses : "")
      }
      id={getAnchorIdByTitle(element.title)}
    >
      {bgImage && (
        <div
          className="absolute left-0 top-0 -z-10 h-full w-full bg-no-repeat bg-fixed bg-center bg-cover"
          style={{ backgroundImage: bgImage }}
        ></div>
      )}
      {previousElementTitle && (
        <PortfolioElementArrowLink
          direction="up"
          elementTitle={previousElementTitle}
        ></PortfolioElementArrowLink>
      )}
      {nextElementTitle && (
        <PortfolioElementArrowLink
          direction="down"
          elementTitle={nextElementTitle}
        ></PortfolioElementArrowLink>
      )}
      <span className="text-5xl">{element.title}</span>
      <div className="flex flex-row gap-5">
        {element.links?.map((link, index) => (
          <PortfolioElementButton
            key={"btn" + index}
            link={link}
            buttonBackgroundColor={element.buttonBackgroundColor}
          ></PortfolioElementButton>
        ))}
      </div>
      {element.description && (
        <div className="flex flex-row flex-wrap text-xl">
          {getHighlightedDescription(
            element.description,
            element.highlightedWords ?? [],
            element.textHighlightColor ?? ""
          )}
        </div>
      )}
    </div>
  );
}

const getHighlightedDescription = (
  description: string,
  highlightedWords: string[],
  textHighlightColor: string
) => {
  const lowerCaseHighlightedWords = highlightedWords?.map((word) =>
    word.toLowerCase()
  );

  return description.split(" ").map((word, index) => {
    const startsWithComma = word.startsWith(",");
    const endsWithComma = word.endsWith(",");

    const wordWithoutComma = word.replace(",", "");

    if (lowerCaseHighlightedWords?.includes(wordWithoutComma.toLowerCase()))
      return (
        <span key={"word" + index}>
          {startsWithComma && ","}
          <span className={textHighlightColor}>{wordWithoutComma}</span>
          {endsWithComma && ","}
          &nbsp;
        </span>
      );

    return <span key={"word" + index}>{word}&nbsp;</span>;
  });
};
