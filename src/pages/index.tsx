import {ALL_PORTFOLIO_ELEMENTS} from "@/portfolio-elements";
import Head from "next/head";
import PortfolioElement from "@/components/PortfolioElement";
import Nav from "@/components/Nav";
import SnakeGame from "@/components/SnakeGame";
import React, {useEffect, useState} from "react";

export default function Home() {
    const [jsEnabled, setJsEnabled] = useState(false);
    useEffect(() => {
        setJsEnabled(true);
    }, []);

    return (
        <>
            <Head>
                <title>nilslambertz.de</title>
                <meta name="description" content="nilslambertz.de"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <main className="w-full h-full relative">
                <Nav></Nav>
                <div className="w-full h-full">
                    {ALL_PORTFOLIO_ELEMENTS.map((elem, index, array) => (
                        <PortfolioElement
                            key={index}
                            element={elem}
                            previousElementTitle={array?.[index - 1]?.title}
                            nextElementTitle={array?.[index + 1]?.title}
                        ></PortfolioElement>
                    ))}
                    {jsEnabled && <SnakeGame></SnakeGame>}
                </div>
            </main>
        </>
    );
}
