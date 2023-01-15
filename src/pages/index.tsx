import { ALL_PORTFOLIO_ELEMENTS } from "@/portfolio-elements";
import Head from "next/head";
import PortfolioElement from "@/components/PortfolioElement";
import ShadowOverlay from "@/components/ShadowOverlay";

export default function Home() {
  return (
    <>
      <Head>
        <title>nilslambertz.de</title>
        <meta name="description" content="nilslambertz.de" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full h-full">
        <ShadowOverlay></ShadowOverlay>
        {ALL_PORTFOLIO_ELEMENTS.map((elem, index) => (
          <PortfolioElement key={index} element={elem}></PortfolioElement>
        ))}
      </main>
    </>
  );
}
