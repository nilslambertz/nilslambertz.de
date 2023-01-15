export interface PortfolioElementType {
  title: string;
  description?: string;
  backgroundImage?: string;
  extraClasses?: string;
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  textHighlightColor?: string;
  highlightedWords?: string[];
  links?: PortfolioElementLink[];
}

export interface PortfolioElementLink {
  icon?: "github" | "mail";
  text?: string;
  url?: string;
}

const DEMO_BUTTON_STRING = "demo";
const REPO_BUTTON_STRING = "repo";

export const ALL_PORTFOLIO_ELEMENTS: PortfolioElementType[] = [
  {
    title: "nilslambertz.de",
    description: "Welcome!",
    backgroundColor: "bg-[#004573]",
    buttonBackgroundColor: "bg-[#004573]",
    links: [
      {
        icon: "github",
        text: "github",
        url: "https://github.com/nilslambertz/",
      },
      {
        icon: "mail",
        text: "mail",
        url: "mailto:mail@nilslambertz.de",
      },
    ],
  },
  {
    title: "sorting algorithms",
    description:
      "sorting algorithms like BubbleSort, QuickSort and MergeSort visualized with pausable animations",
    backgroundImage: "/sorting-algorithms.png",
    buttonBackgroundColor: "bg-[#ff6f00]",
    highlightedWords: ["BubbleSort", "QuickSort", "MergeSort"],
    textHighlightColor: "text-[#ff6f00]",
    links: [
      {
        text: DEMO_BUTTON_STRING,
        url: "https://sorting.nilslambertz.de/",
      },
      {
        icon: "github",
        text: REPO_BUTTON_STRING,
        url: "https://github.com/nilslambertz/sorting-algorithms",
      },
    ],
  },
  {
    title: "pathfinding algorithms",
    description:
      "pathfinding algorithms like A*, Dijkstra and Greedy visualized",
    backgroundImage: "/pathfinding-algorithms.png",
    extraClasses: "!bg-opacity-90",
    buttonBackgroundColor: "bg-[#0a4c01]",
    highlightedWords: ["A*", "Dijkstra", "Greedy"],
    textHighlightColor: "text-[#20b031]",
    links: [
      {
        text: DEMO_BUTTON_STRING,
        url: "https://pathfinding.nilslambertz.de/",
      },
      {
        icon: "github",
        text: REPO_BUTTON_STRING,
        url: "https://github.com/nilslambertz/pathfinding-algorithms",
      },
    ],
  },
  {
    title: "blockchain visualizer",
    description: "introduction to Blockchains through an interactive example",
    backgroundImage: "/blockchain-demo.png",
    buttonBackgroundColor: "bg-[#12595f]",
    highlightedWords: ["Blockchains"],
    textHighlightColor: "text-[#0db1bf]",
    links: [
      {
        text: DEMO_BUTTON_STRING,
        url: "https://blockchain.nilslambertz.de/",
      },
      {
        icon: "github",
        text: REPO_BUTTON_STRING,
        url: "https://github.com/nilslambertz/blockchain-demo",
      },
    ],
  },
  {
    title: "mobile app",
    description: "react native app to keep track of classes and exercises",
    backgroundImage: "/mobile-app.png",
    buttonBackgroundColor: "bg-[#a31dac]",
    highlightedWords: ["classes", "exercises"],
    textHighlightColor: "text-[#ed03fc]",
    links: [
      {
        icon: "github",
        text: REPO_BUTTON_STRING,
        url: "https://github.com/nilslambertz/UebungspunkteReactNative",
      },
    ],
  },
];
