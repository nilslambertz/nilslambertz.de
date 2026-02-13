import {getAnchorIdByTitle} from "@/functions";
import {
    ABOUT_ME_PORTFOLIO_ELEMENT,
    ALL_PORTFOLIO_ELEMENTS,
} from "@/portfolio-elements";
import React from "react";
import NavLink from "./NavLink";

const aboutMeElem = ABOUT_ME_PORTFOLIO_ELEMENT;

export default function Nav() {
    return (
        <div
            className="hidden md:flex backdrop-blur-sm background-blur-gradient z-10 h-20 pb-4 fixed top-0 w-full flex-col px-5">
            <div className="flex-1 text-white px-10 text-xl flex flex-row gap-10 items-center">
                <NavLink
                    title={aboutMeElem.title}
                    link={getAnchorIdByTitle(aboutMeElem.title)}
                ></NavLink>
                <div className="flex-1"></div>
                {ALL_PORTFOLIO_ELEMENTS.slice(1).map((elem) => (
                    <NavLink
                        key={elem.title}
                        title={elem.title}
                        link={getAnchorIdByTitle(elem.title)}
                    ></NavLink>
                ))}
            </div>
        </div>
    );
}
