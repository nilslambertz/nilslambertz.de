export interface PortfolioElementType {
  title: string;
  description?: string;
  backgroundImage?: string;
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
    title: "Sorting Algorithms",
    description:
      "Sorting algorithms like BubbleSort, QuickSort and MergeSort visualized with pausable animations",
    backgroundImage: "/arraySortingPicture.png",
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
        url: "https://sorting.nilslambertz.de/",
      },
    ],
  },
];
