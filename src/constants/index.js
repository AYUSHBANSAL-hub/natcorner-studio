import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  dtu,
  mss,
  manipal,
  icon,
  ethforall,
  microsoft,
  acciojob,
  frontrow,
  smollan,
  stock,
  varchasv,
  youtube,
  tgh,
  assets,
  natcorner,
  brigand,
  loginhero,
  Merchandise,
  news_img1,
  news_img2,
  news_img3,
  etf_img1,
  etf_img2,
  etf_img3,
} from "../assets";

import {
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiTypescript,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiRedux,
  SiOpenai,
  SiAmazonaws,
  SiNodedotjs,
  SiGooglecloud,
  SiMongodb,
  SiDocker,
  SiCypress,
  SiNextdotjs,
  SiMicrosoftazure,
} from "react-icons/si";

import {AiOutlineBook} from "react-icons/ai"

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";


/* 
#########################
#########################
#########################
      Home Page
#########################
#########################
#########################
*/
export const navLinks = [
  {
    id: "games",
    title: "Games",
    link: "/games",
  },
  {
    id: "etf",
    title: "ETF",
    link: "/etf",
  },
  {
    id: "brand-merchandise",
    title: "Brand Merchandise",
    link: "/merchandise",
  },
  {
    id: "login",
    title: "Login",
    link: "/login",
    isButton: true,
  },
];

export const heroSection = {
  title: "The Brigand",
  subtitle:
    "Unleash Chaos, Dominate the Battlefield: Experience the Ultimate FPS Adventure with The Brigand",
  buttons: [
    {
      label: "Buy Now",
      link: "/buy",
    },
    {
      label: "Visit Site",
      link: "/the-brigand",
    },
  ],
  image: brigand, // Replace with the actual image path
};

export const newsCategories = [
  "All News",
  "The Brigand",
  "The White Ocean",
  "The Tiger",
  "Padmavyuham",
  "The Lost 8",
];

export const latestNews = [
  {
    id: "news-1",
    category: "The Brigand",
    date: "JAN 09, 2025",
    title: "New Gameplay Trailer Reveals The Brigand’s Arsenal",
    description: "Get a sneak peek into the new gameplay features and weapons.",
    link: "/news/the-brigand-arsenal",
    image: news_img1, // Replace with the actual image path
  },
  {
    id: "news-2",
    category: "The Brigand",
    date: "JAN 09, 2025",
    title: "Experience Next-Level Tactical Combat",
    description: "Discover how The Brigand redefines tactical FPS gameplay.",
    link: "/news/next-level-tactical-combat",
    image: news_img2, // Replace with the actual image path
  },
  {
    id: "news-3",
    category: "The Tiger",
    date: "JAN 09, 2025",
    title: "Intense Multiplayer Mode Announced for Upcoming FPS",
    description:
      "Prepare for adrenaline-pumping action in The Brigand’s multiplayer mode.",
    link: "/news/multiplayer-mode-announcement",
    image: news_img3, // Replace with the actual image path
  },
];

export const callToAction = {
  label: "Read More",
  link: "/news",
};

// Navigation links, hero section, and latest news remain the same...

export const etfCategories = [
  "All ETFs",
  "Nifty 50",
  "Nifty Next 50",
  "Next Midcap 150",
  "Nifty Smallcap 250",
  "Others",
];

export const etfList = [
  {
    id: "etf-1",
    category: "All ETFs",
    date: "JAN 09, 2025",
    title: "New Gameplay Trailer Reveals The Brigand’s Arsenal",
    description: "Discover insights into the latest ETFs and their performance.",
    link: "/etfs/brigand-arsenal",
    image: etf_img1, // Replace with the actual image path
  },
  {
    id: "etf-2",
    category: "Nifty 50",
    date: "JAN 09, 2025",
    title: "New Gameplay Trailer Reveals The Brigand’s Arsenal",
    description: "Explore the next level of ETF market analysis.",
    link: "/etfs/next-level-analysis",
    image: etf_img2, // Replace with the actual image path
  },
  {
    id: "etf-3",
    category: "All ETFs",
    date: "JAN 09, 2025",
    title: "New Gameplay Trailer Reveals The Brigand’s Arsenal",
    description: "Learn about ETF market trends and updates.",
    link: "/etfs/market-trends",
    image: etf_img3, // Replace with the actual image path
  },
];

export const merchandise = [
  {
    id: "merch-1",
    title: "T-Shirt | Natcorner",
    price: "$25.00",
    link: "/merchandise/tshirt-1",
    image: Merchandise, // Replace with the actual image path
  },
  {
    id: "merch-2",
    title: "T-Shirt | Natcorner",
    price: "$25.00",
    link: "/merchandise/tshirt-2",
    image: Merchandise, // Replace with the actual image path
  },
  {
    id: "merch-3",
    title: "T-Shirt | Natcorner",
    price: "$25.00",
    link: "/merchandise/tshirt-3",
    image: Merchandise, // Replace with the actual image path
  },
  {
    id: "merch-4",
    title: "T-Shirt | Natcorner",
    price: "$25.00",
    link: "/merchandise/tshirt-4",
    image: Merchandise, // Replace with the actual image path
  },
];

export const callToActionETFs = {
  label: "Read More",
  link: "/etfs",
};

export const callToActionMerchandise = {
  label: "View More",
  link: "/merchandise",
};

// Other sections remain the same...

import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { FaTwitter,FaLinkedinIn,FaArrowUp } from "react-icons/fa";
export const footer = {
  logo: {
    label: "Natcorner Studio",
    image: natcorner, // Replace with the actual logo path
    link: "/",
  },
  socialLinks: [
    {
      id: "facebook",
      label: "Facebook",
      icon: <AiFillFacebook />,
      link: "https://facebook.com/natcorner",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/natcorner",
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: <AiFillYoutube />,
      link: "https://youtube.com/natcorner",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/company/natcorner",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: <AiFillInstagram />,
      link: "https://instagram.com/natcorner",
    },
  ],
  backToTop: {
    label: "Back to Top",
    icon: <FaArrowUp /> // Replace with an actual icon path, if applicable
  },
};


/* 
#########################
#########################
#########################
      Games Page
#########################
#########################
#########################
*/
export const featuredGames = [
  {
    id: "game-1",
    title: "The Brigand",
    image: "path/to/brigand-image.png", // Replace with the actual image path
    link: "/games/the-brigand",
  },
  {
    id: "game-2",
    title: "The White Ocean",
    image: "path/to/white-ocean-image.png", // Replace with the actual image path
    link: "/games/the-white-ocean",
  },
  {
    id: "game-3",
    title: "The Tiger",
    image: "path/to/tiger-image.png", // Replace with the actual image path
    link: "/games/the-tiger",
  },
  {
    id: "game-4",
    title: "Padmavyuham",
    image: "path/to/padmavyuham-image.png", // Replace with the actual image path
    link: "/games/padmavyuham",
  },
  {
    id: "game-5",
    title: "The Lost 8",
    image: "path/to/lost-8-image.png", // Replace with the actual image path
    link: "/games/the-lost-8",
  },
];

export const gamesSection = {
  heading: "Featured Games",
  description: "Explore our latest and most exciting games.",
};


/* 
#########################
#########################
#########################
      Game Details
#########################
#########################
#########################
*/

export const gameDetails = [
  {
    id: "the-brigand",
    title: "The Brigand",
    description: `As global powers vie for dominance in a war-torn future, a rogue paramilitary group known only as "Brigands" emerges from the shadows, challenging the world's fragile order. Branded as terrorists by the governments they once served, an elite squad of disavowed operatives must fight to expose a web of lies and betrayal buried deep within the heart of a secret global conspiracy. Outnumbered and outgunned, they wage a relentless battle for survival, seeking redemption in a world that has turned against them.`,
    image: "path/to/brigand-main-image.png", // Replace with actual main image path
    video: "path/to/brigand-video.mp4", // Replace with the video path
    screenshots: [
      "path/to/brigand-screenshot-1.png", // Screenshot 1
      "path/to/brigand-screenshot-2.png", // Screenshot 2
      "path/to/brigand-screenshot-3.png", // Screenshot 3
    ],
    button: {
      label: "Share your interests",
      action: "/games/the-brigand/share", // Action for the button
    },
  },
  {
    id: "the-white-ocean",
    title: "The White Ocean",
    description: `Dive into a haunting narrative of survival and mystery. "The White Ocean" brings you to a submerged city filled with secrets and terrors lurking beneath the waves. Unravel the story of its enigmatic downfall while battling otherworldly forces.`,
    image: "path/to/white-ocean-main-image.png", // Replace with actual main image path
    video: "path/to/white-ocean-video.mp4", // Replace with the video path
    screenshots: [
      "path/to/white-ocean-screenshot-1.png",
      "path/to/white-ocean-screenshot-2.png",
      "path/to/white-ocean-screenshot-3.png",
    ],
    button: {
      label: "Share your interests",
      action: "/games/the-white-ocean/share",
    },
  },
  // Add similar objects for "The Tiger", "Padmavyuham", and "The Lost 8"
];

export const gamesPageConfig = {
  detailPageLink: "/games/:id", // Route pattern for dynamic pages
};


// Login

export const loginImageCarousel=[loginhero,smollan]
